import { Payment, TYPE, STATUS } from "../../src/Model/Payment";

export  const paymentBoletoMock = new Payment(
    "id_payment_1",
    4555,
    TYPE.BOLETO,
    STATUS.PAGAR,
    "buyer_id_1",
    "client_id_1"

)

export  const paymentCardMock = new Payment(
    "id_payment_2",
    4555,
    TYPE.CARD,
    STATUS.PAGO,
    "buyer_id_2",
    "client_id_2"

)