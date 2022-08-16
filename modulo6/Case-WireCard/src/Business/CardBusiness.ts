import { CustomError } from "../Error/CustomError";
import { IdGenerator } from "../Services/idGenerator";
import { CardInputDto } from "../Types/CardInputDTO";
import { CardData } from "../Data/CardData";
import { Card } from "../Model/Card";
import { BuyerData } from "../Data/BuyerData";

export class CardBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private cardData: CardData,
    private buyerData: BuyerData
  ) {}
  card = async (input: CardInputDto) => {
    try {
      const {
        card_holder_name,
        card_number,
        card_cvv,
        card_expiration_date,
        buyer_id,
      } = input;
      if (!card_holder_name || !card_number || !card_cvv) {
        throw new CustomError(422, "Missing input");
      }
      if (card_number.length !== 16) {
        throw new CustomError(422, "Invalid card_number");
      }
      if (card_cvv.length !== 3) {
        throw new CustomError(422, "Invalid card_cvv");
      }
      const verificationBuyer_id = await this.buyerData.getBuyerById(buyer_id);

      if (!verificationBuyer_id) {
        throw new CustomError(404, `Buyer could not be found`);
      }
      const id = this.idGenerator.generate();

      const [mes, ano] = card_expiration_date.split("/");
      const card_expiration_date_verification = new Date(`${ano}-${mes}-01`);
      if (card_expiration_date_verification.getTime() < Date.now()) {
        throw new CustomError(400, "Expired date card");
      }

      const newCard = new Card(
        id,
        card_holder_name,
        card_number,
        card_expiration_date,
        card_cvv,
        buyer_id
      );

      await this.cardData.createCard(newCard);

      return newCard;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
