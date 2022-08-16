import { STATUS, TYPE } from "./Payment"

export class Card{
    constructor(
        private id: string,
        private card_holder_name: string,
        private card_number: string,
        private card_expiration_date: string,
        private card_cvv: string,
        private buyer_id: string
    ){}

    getId = ():string => {
        return this.id
    }
    getCardHolderName = ():string => {
        return this.card_holder_name
    }
    getCardNumber = ():string => {
        return this.card_number
    }
    getCardExpirationDate= ():string => {
        return this.card_expiration_date
    }
    getCardCvv = ():string => {
        return this.card_cvv
    }
    getBuyerId = ():string => {
        return this.buyer_id
    }
    static toUserModel(data: any): Card {
        return new Card(data.id, data.card_holder_name, data.card_number, data.card_expiration_date, data.card_cvv, data.buyer_id);
      }
}
