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
}
