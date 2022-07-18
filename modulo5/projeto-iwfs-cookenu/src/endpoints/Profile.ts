import { Request, Response } from "express";
import {UserDataBase} from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export async function profile(req: Request, res:Response){
    try {
        const token = req.headers.authorization as string
  
        if(!token) {
           res.statusCode = 422
           res.statusMessage = "Token não informado"
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
       
  
  
           res.status(201).send({user})
    } catch (error:any) {
        res.status(500).send(error.message)
        
    }
}