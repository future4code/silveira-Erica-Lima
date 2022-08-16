import { CustomError } from "../Error/CustomError";
import { Payment } from "../Model/Payment";
import { BaseData } from "./BaseData";

export class PaymentData extends BaseData {
  protected tableName: string = "Payment";

  public async createPayment(payment: Payment): Promise<void> {
    try {
      await BaseData.connection(this.tableName).insert({
        id: payment.getId(),
        amount: payment.getAmount(),
        type: payment.getType(),
        status: payment.getStatus(),
        buyer_id: payment.getBuyerId(),

        card_id: payment.getCarId(),

        client_id: payment.getClientId()
      });
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  }

  public async getPaymentById(id:string) : Promise<Payment | undefined>{

    try {
       const [payment]:Payment []= await BaseData.connection(this.tableName).select("*")
        .where({id})
        return payment
    }
    catch (error:any) {
        console.log(error)
        throw new CustomError(400, error.sqlMessage);

    }
}
}
