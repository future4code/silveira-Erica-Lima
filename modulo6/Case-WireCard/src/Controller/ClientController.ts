import { Request, Response } from "express";
import { ClientBusiness } from "../Business/ClientBusiness";

export class ClientController{
    constructor(private clientBusiness: ClientBusiness){}
    client = async (req: Request, res: Response) => {
        try {
            const {name} = req.body;
            const result: string = await this.clientBusiness.client(name)
            res.status(201).send({ result });
        } catch (error: any) {
            const { statusCode, message } = error;
          res.status(statusCode || 400).send({ message });
        }
    }
}