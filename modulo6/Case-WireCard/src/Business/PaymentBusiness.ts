import { CustomError } from "../Error/CustomError";

import { IdGenerator } from "../Services/idGenerator";
import { Payment, STATUS, TYPE } from "../Model/Payment";
import { PaymentInputDTO } from "../Types/PaymentInputDTO";
import { PaymentData } from "../Data/PaymentData";
export class PaymentBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private paymentData: PaymentData
  ) {}
  payment = async (input: PaymentInputDTO) => {
    try {
      const { amount, type, client_id, buyer_id } = input;
      let { status } = input;
      if (!amount || !type || !client_id || !buyer_id) {
        throw new CustomError(422, "Missing input");
      }
      if (!status) {
        status = STATUS.PAGAR;
      }
      const verificationAmout = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount);

      if (!verificationAmout) {
        throw new CustomError(401, `Incorrect o amount`);
      }
      if (type === TYPE.BOLETO) {
        status = STATUS.PAGAR;
      }

      if (type === TYPE.CARD) {
        status = STATUS.PAGO;
      }
      if (type !== TYPE.BOLETO && type !== TYPE.CARD) {
        throw new CustomError(403, "Incorrect type, put 'BOLETO' or 'CARD'");
      }
      const id = this.idGenerator.generate();
      const newPayment = new Payment(
        id,
        amount,
        type,
        status,
        buyer_id,
        client_id
        
      );
      await this.paymentData.createPayment(newPayment);

      return newPayment;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
  getPaymentId = async (id: string) => {
    if (!id) {
      throw new CustomError(400, "Enter a payment id");
    }
    const paymentId = await this.paymentData.getPaymentById(id);

    if (!paymentId) {
      throw new CustomError(400, "There is no payment with this id");
    }
    return paymentId;
  };
}

