import { Request, Response } from "express";
import { UserData } from "../data/mySQL/UserData";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { SignupInputDTO } from "../type/SignupInputDTO";
import { UserRepository } from "./UserRepository";

export class UserBusiness{
// constructor(private userBusiness: UserRepository){}
public  signup = async (input: SignupInputDTO, res: Response) => {
    try {
        const {name, email, password} = input

        if(!name || !email || !password){
            res.statusCode = 422
            throw new Error("Preencha os campos 'name','password' e 'email'.");
        }
        if(password.length < 6){
            res.statusCode = 400
            throw new Error("Inválido password");
        }
        if (!email.includes("@") || !email.includes(".com")) {
            res.statusCode = 401;
            throw new Error("O campo do email deve conter um '@' e um '.com'");
        }

        const userData = new UserData()
        const user = await userData.findUserByEmail(email)

        if (user) {
          res.statusCode = 409
          throw new Error('Email já cadastrado')
       }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

       const hashManager = new HashManager()
       const hashPassword = hashManager.hash(password)

       const newUser = new User(
        id,
         name, 
         email, 
         hashPassword
         )
       await userData.createUser(newUser)

       const authenticator = new Authenticator()
       const token = authenticator.generateToken({id})

    } catch (error: any) {
        res.status(500).send(error.message)
    }
}
public  login = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}
}