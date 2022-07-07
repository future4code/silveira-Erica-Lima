import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO } from "../type/LoginInputDTO";
import { SignupInputDTO } from "../type/SignupInputDTO";

export default class UserController{
    constructor(private userBusiness: UserBusiness){}
   public  signup = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body

    const input: SignupInputDTO = {
        name,
        email,
        password
    }
    // const token = this.userBusiness.createUser(input)
    res.status(201).send({message:"Criado com sucesso."})
    } catch (error:any) {
        res.status(500).send(error.message)
        
    }
   }
   async  login  (req: Request, res: Response) {
    try {
        const { email, password} = req.body

    const input:LoginInputDTO = {
        email,
        password
    }
     // const token = this.userBusiness.createUser(input)
    res.status(201).send({message:"Logado com sucesso."})
    } catch (error:any) {
        res.status(500).send(error.message)
        
    }
   }
}