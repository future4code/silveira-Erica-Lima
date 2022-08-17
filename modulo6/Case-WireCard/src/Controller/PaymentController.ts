import { Request, Response } from "express";

import { CardBusiness } from "../Business/CardBusiness";

import { PaymentBusiness } from "../Business/PaymentBusiness";
import { PaymentInputDTO } from "../Types/PaymentInputDTO";


export class PaymentController{
    constructor(private paymentBusiness: PaymentBusiness){}
    payment = async (req: Request, res: Response) => {
        try {

            const {amount, type
                } = req.body;
            const input: PaymentInputDTO = {
                amount, type
            }
            const token =await this.paymentBusiness.payment(input)
            res.status(201).send({ token });

        } catch (error: any) {
            const { statusCode, message } = error;
          res.status(statusCode || 400).send({ message });
        }

    }

  };
  getPaymentId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const payment = await this.paymentBusiness.getPaymentId(id);
    res.status(200).send(payment);
  };
r
}
