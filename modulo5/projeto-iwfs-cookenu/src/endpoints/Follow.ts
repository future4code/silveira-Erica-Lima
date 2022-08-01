import { Request, Response } from "express";
import {UserDataBase} from "../data/UserDataBase";
import { User } from "../entities/Types";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res:Response){
    try {
        const userToFollowId: string = req.body
        const token = req.headers.authorization as string;
        
        if (!userToFollowId) {
          res.statusCode = 422;
          res.statusMessage = "'userToFollowId' não informado";
          throw new Error();
        }
        const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) 
      
            if(!tokenData) {
               res.statusCode = 401
               res.statusMessage = "Token inválido"
               throw new Error()
            }
        if (!token) {
          res.statusCode = 422;
          res.statusMessage = "Token não informado";
          throw new Error();
        }
    

        //   const idGenerator = new IdGenerator()
        //   const id = idGenerator.generate()

        //  const hashManager = new HashManager()
        //  const hashPassword = hashManager.hash(password)

        //  const newUser = new User(id, name, email, hashPassword)
        //  await userDataBase.createUser(newUser)

        //  const authenticator = new Authenticator()
        //  const token = authenticator.generateToken({id})

         res.status(201).send({})
    } catch (error:any) {
        res.status(500).send(error.message)
        
    }
}