import { CustomError } from "../Error/CustomError";

import { HashGenerator } from "../Services/hashGenerator";
import { IdGenerator } from "../Services/idGenerator";
import { TokenGenerator } from "../Services/tokenGenerator";

import { CardInputDto } from "../Types/CardInputDTO";
import { CardData } from "../Data/CardData";
import { Card } from "../Model/Card";
import { BuyerData } from "../Data/BuyerData";

export class CardBusiness {
  constructor(

    private hashGenerator: HashGenerator,
    private idGenerator: IdGenerator,
    private tokenGenerator: TokenGenerator,
    private cardData: CardData,
    private buyerData: BuyerData,
  ) {}
  card = async(input:CardInputDto) => {
    try {
      const {card_holder_name, card_number, card_cvv} = input
      if (!card_holder_name || !card_number || !card_cvv) {
        throw new CustomError(422, "Missing input");
      }
      if(card_number.length > 16 || card_number.length < 16){
        throw new CustomError(422, "Invalid card_number")
      }
      if(card_cvv.length > 3 || card_cvv.length < 3){
        throw new CustomError(422, "Invalid card_cvv")
      }
      const buyerExist=  await this.buyerData.getBuyerById(buyer_id)
          if (!buyerExist ) {
            throw new CustomError(404, `Buyer could not be found`)
        };
        const id = this.idGenerator.generate();

        const buyer_id = this.tokenGenerator.id

      const card_expiration_date = new Date().toISOString().split("T")[0];

      const newCard = new Card (id, card_holder_name, card_number, card_expiration_date, buyer_id, card_cvv);

      
      await this.cardData.createCard(newCard)

      return newCard
      
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }

}
