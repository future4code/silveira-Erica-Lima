import { Request, Response } from "express";
import { ClientBusiness } from "../Business/ClientBusiness";
import { ClientInputDTO } from "../Types/ClientInputDTO";


export class ClientController {
  constructor(private clientBusiness: ClientBusiness) {}
  client = async (req: Request, res: Response) => {
    try {
      const { id } = req.body;
      const input: ClientInputDTO = {
        id,
      };
      await this.clientBusiness.client(input);
      res.status(201).send({ message: "successfully created seller" });
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });


    }
  };
}
