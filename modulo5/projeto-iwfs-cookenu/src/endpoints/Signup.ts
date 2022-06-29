import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res:Response){
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password){
            res.statusCode = 422
            throw new Error( "Preencha os campos 'name','password', e 'email'.");
        }
        if (password.length < 6) {
            throw new Error("Inválido password");
          }
        if (!email.includes("@") || !email.includes(".com")) {
            res.statusCode = 401;
            throw new Error("O campo do email deve conter um '@' e um '.com'");
          }
          const userDataBase = new UserDataBase()
          const user = await userDataBase.findUserByEmail(email)

          if (user) {
            res.statusCode = 409
            throw new Error('Email já cadastrado')
         }

          const idGenerator = new IdGenerator()
          const id = idGenerator.generate()

         const hashManager = new HashManager()
         const hashPassword = hashManager.hash(password)

         const newUser = new User(id, name, email, hashPassword)
         await userDataBase.createUser(newUser)

         const authenticator = new Authenticator()
         const token = authenticator.generateToken({id})

         res.status(201).send({token})
    } catch (error:any) {
        res.status(500).send(error.message)
        
    }
}