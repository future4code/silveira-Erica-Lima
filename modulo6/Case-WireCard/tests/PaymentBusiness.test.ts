import { PaymentBusiness } from "../src/Business/PaymentBusiness";
import { PaymentData } from "../src/Data/PaymentData";
import { TYPE } from "../src/Model/Payment";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { PaymentDataMock } from "./mocks/PaymentDataMock";
import {  } from "./mocks/PaymentMock";

const paymentBusinessMock = new PaymentBusiness(
    new IdGeneratorMock(),
    new PaymentDataMock() as PaymentData
)
describe("Test the payment", ( ) => {
    test("Deve retornar o error do amount vazio",  async () =>{
        await paymentBusinessMock.payment(  "id_payment_1", 2555, "BOLETO", "PAGAR", "buyer_id_1", "client_id_1" )
    })
})