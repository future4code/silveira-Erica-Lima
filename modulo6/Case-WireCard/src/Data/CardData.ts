import { CustomError } from "../error/CustomError";
import { Card } from "../Model/Card";
import { BaseData } from "./BaseData";

export class CardData extends BaseData {
  protected tableName: string = "Card";

  public async createBuyer(card: Card): Promise<void> {
    try {
      await BaseData.connection(this.tableName).insert({
        id: card.getId(),
        card_holder_name: card.getCardHolderName(),
        card_expiration_date: card.getCardExpirationDate(),
        card_cvv: card.getCardCvv(),
        buyer_id: card.getBuyerId(),
      });
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  }


}
