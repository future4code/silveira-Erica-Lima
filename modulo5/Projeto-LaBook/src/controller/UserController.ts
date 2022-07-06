import { Request, Response } from "express";
import { SignupInputDTO } from "../type/SignupInputDTO";

export default class UserController{
   async  signup  (req: Request, res: Response) {
    try {
        const {name, email, password} = req.body

    const input: SignupInputDTO = {
        name,
        email,
        password
    }
    } catch (error) {
        
    }
   }
   login = async (req: Request, res: Response) => {

   }
}