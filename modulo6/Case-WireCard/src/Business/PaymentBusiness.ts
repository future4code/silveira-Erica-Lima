import { CustomError } from "../Error/CustomError";

import { HashGenerator } from "../Services/hashGenerator";
import { IdGenerator } from "../Services/idGenerator";
import { TokenGenerator } from "../Services/tokenGenerator";
import { ClientData } from "../Data/ClientData";
import { Payment, STATUS, TYPE } from "../Model/Payment";
import { PaymentInputDTO } from "../Types/PaymentInputDTO";
import { PaymentData } from "../Data/PaymentData";

import { BuyerData } from "../Data/BuyerData";
import { CardData } from "../Data/CardData";


export class PaymentBusiness {
    constructor(
        private hashGenerator: HashGenerator,
        private idGenerator: IdGenerator,
        private tokenGenerator: TokenGenerator,
        private paymentData: PaymentData,
        private buyerData: BuyerData,
        private clientData: ClientData,
        private cardData: CardData
      ) {}
      payment = async(input: PaymentInputDTO) => {
        try {
          const {amount, type} = input
            if (!amount || !type   ) {
                throw new CustomError(422, "Missing input");
              }
              const verificationAmout = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount)
              
              if(!verificationAmout){
                throw new CustomError(401, `Incorrect o amount`)
              }
            if(type !== TYPE.BOLETO && type !== TYPE.CARD){
              throw new CustomError(403, "Incorrect type, put 'BOLETO' or 'CARD'");
            }

            const tokenData = this.tokenGenerator.getTokenData(token)
         const buyer_id = tokenData.id
          const card_id =  tokenData.id
          const client_id =  tokenData.id

            if(status !== STATUS.PAGO && status !== STATUS.PAGAR ){
              throw new CustomError(403, "Incorrect status");
            }
          const buyerExist=  await this.buyerData.getBuyerById(buyer_id)
          if (!buyerExist ) {
            throw new CustomError(404, `Buyer could not be found`)
        };
          const cardExist=  await this.cardData.getCardById(card_id)
          if (!cardExist ) {
            throw new CustomError(404, `Card could not be found`)
        };
          const clientExist=  await this.clientData.getClientById(client_id)
          if (!clientExist) {
            throw new CustomError(404, `Client could not be found`)
        };
        const id = this.idGenerator.generate();
        const newPayment = new Payment(
          id,
          amount,
          type,
          status,
          buyer_id,
          card_id,
          client_id
        )
        await this.paymentData.createPayment(newPayment)

        return newPayment
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
      }
}
