import { CustomError } from "../Error/CustomError";
import { Card } from "../Model/Card";
import { BaseData } from "./BaseData";

export class CardData extends BaseData {
  protected tableName: string = "Card";

  public async createCard(card: Card): Promise<void> {
    try {
      await BaseData.connection(this.tableName).insert({
        id: card.getId(),
        card_holder_name: card.getCardHolderName(),
        card_expiration_date: card.getCardExpirationDate(),
        card_number: card.getCardNumber(),
        card_cvv: card.getCardCvv(),
        buyer_id: card.getBuyerId(),
      });
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  }

  public async getCardById(id: string): Promise<Card | undefined> {
    try {
      const [card]: Card[] = await BaseData.connection(this.tableName)
        .select("*")
        .where({ id });
      return card;
    } catch (error: any) {
      console.log(error);
      throw new CustomError(400, error.sqlMessage);
    }
  }

}
