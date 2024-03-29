import { Request, Response } from "express";
import CuboBusiness from "../Business/CuboBusiness";
import { CuboInputDTO } from "../Model/CuboModel";


export class CuboController {
  constructor(private cuboBusiness: CuboBusiness) {}
  createCubo = async (req: Request, res: Response) => {
    try {
      const { first_name, laster_name, participation } = req.body;
      const input: CuboInputDTO = {
        first_name,
        laster_name,
        participation
      };
       await this.cuboBusiness.createCubo(input);
      res.status(201).send({message:"Successfully created" });
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  };
  selectCubo = async (req: Request, res: Response) => {
    try {
      
    
      const result = await this.cuboBusiness.selectCubo();
      res.status(200).send({result});
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  };

}

export default CuboController;
