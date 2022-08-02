import { Request, Response } from "express";
import { CardBusiness } from "../Business/CardBusiness";
import { PaymentBusiness } from "../Business/PaymentBusiness";
import { PaymentBoleto, PaymentCard, TYPE } from "../Model/Payment";

export class PaymentController {
  constructor(
    private paymentBusiness: PaymentBusiness,
    private cardBusiness: CardBusiness
  ) {}
  payment = async (req: Request, res: Response) => {
    try {
      const {
        amount,
        type,
        status,
        client_id,
        buyer_id,
        card_cvv,
        card_holder_name,
        card_number,
        card_expiration_date,
      } = req.body;
      if (type === TYPE.CARD) {
        const inputPayment = {
          amount,
          type,
          status,
          client_id,
          buyer_id,
        };
        const inputCard: PaymentCard = {
          card_cvv,
          card_expiration_date,
          card_number,
          card_holder_name,
          buyer_id,
        };
        const result = await this.cardBusiness.card(inputCard);
        await this.paymentBusiness.payment(inputPayment);
        res.status(201).send({ message: "Payment made successfully", result });
      } else {
        const inputBoleto: PaymentBoleto = {
          amount,
          type,
          status,
          client_id,
          buyer_id,
        };
        await this.paymentBusiness.payment(inputBoleto);
        const numberBoleto = Date.now();
        res.status(201).send({ message: `Number the boleto ${numberBoleto}` });
      }
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  };
  getPaymentId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const payment = await this.paymentBusiness.getPaymentId(id);
    res.status(200).send(payment);
  };
}
