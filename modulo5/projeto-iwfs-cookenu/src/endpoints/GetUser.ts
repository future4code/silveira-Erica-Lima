import { Request, Response } from "express";
import { BaseDataBase } from "../data/BaseDataBase";
import {UserDataBase} from "../data/UserDataBase";
import { User } from "../entities/Types";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function getUser(req: Request, res:Response){
    try {
        const id = req.params.id
        const token = req.headers.authorization as string
  
        if(!token) {
           res.statusCode = 422
           res.statusMessage = "Token não informado"
           throw new Error()
        }
        
        if(!id) {
            res.statusCode = 406
            res.statusMessage = "Id não informado"
            throw new Error()
         }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token) 
  
        if(!tokenData) {
           res.statusCode = 401
           res.statusMessage = "Token inválido"
           throw new Error()
        }
        const userDataBase = new UserDataBase()
         const user = await userDataBase.getAllUser( tokenData.id)
       
        console.log(id);
        const userId = await userDataBase.getUserById(id)
        if (!userId) {
            res.statusCode = 406
            res.statusMessage = "Id inválido"
            throw new Error()
        }
  
            res.status(200).send({user})
    } catch (error:any) {
        res.status(500).send(error.message)
        
    }
}