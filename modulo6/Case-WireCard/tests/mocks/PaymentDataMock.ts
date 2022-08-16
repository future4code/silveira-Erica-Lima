import { Payment } from "../../src/Model/Payment";
import { paymentBoletoMock, paymentCardMock } from "./PaymentMock";

export class PaymentDataMock {
    public async createPayment(payment: Payment): Promise<void> {

    }

    public async getUserById(id: string): Promise<Payment | undefined> {
        switch(id) {
            case "id_payment_1":
                return paymentBoletoMock
            case "id_payment_2":
                return paymentCardMock
            default: 
                return undefined
        }
    }
    public async getAllPayments(): Promise<Payment[]> {
        return [paymentBoletoMock, paymentCardMock]
    }
}    
