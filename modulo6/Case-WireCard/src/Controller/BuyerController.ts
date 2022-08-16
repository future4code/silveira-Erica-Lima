import { Request, Response } from "express";
import { BuyerBusiness } from "../Business/BuyerBusiness";
import { BuyerInputDTO } from "../Types/BuyerInputDTO";


export class BuyerController{
    constructor(private buyerBusiness: BuyerBusiness){}
    buyer = async (req: Request, res: Response) => {
        try {
            const {name, email, cpf} = req.body;
            const input: BuyerInputDTO = {
                name, email, cpf
            }

            const result = await this.buyerBusiness.buyer(input)
            res.status(201).send({ result });

        } catch (error: any) {
            const { statusCode, message } = error;
          res.status(statusCode || 400).send({ message });
        }

    }
  };
  getBuyerId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const buyer = await this.buyerBusiness.getBuyerId(id);
    res.status(200).send(buyer);
  };
}
