import { Request, Response } from "express";
import { CardBusiness } from "../Business/CardBusiness";
import { CardInputDto } from "../Types/CardInputDTO";

import { PaymentInputDTO } from "../Types/PaymentInputDTO";

export class CardController{
    constructor(private cardBusiness: CardBusiness){}
    card = async (req: Request, res: Response) => {
        try {
            const {card_holder_name, card_number, card_expiration_date, buyer_id, card_cvv} = req.body;
            const input: CardInputDto = {
                card_holder_name, card_number, card_expiration_date, card_cvv, buyer_id
            }
            const token =await this.cardBusiness.card(input)
            res.status(201).send({ token });
        } catch (error: any) {
            const { statusCode, message } = error;
          res.status(statusCode || 400).send({ message });
        }
    }
}  
