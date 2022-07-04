import { Request, Response } from "express";
import { FollowDataBase } from "../data/FollowDataBase";
import {UserDataBase} from "../data/UserDataBase";
import { User } from "../entities/Types";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function follow(req: Request, res:Response){
    try {
        const id_followed: string = req.body
        const token = req.headers.authorization as string;
        
        if (!id_followed) {
          res.statusCode = 422;
          res.statusMessage = "'id_followed' não informado";
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
        const followDataBase = new FollowDataBase();
        const userId = await followDataBase.getUserById(id_followed);
        if (!userId) {
          res.statusCode = 406;
          res.statusMessage = "Id inválido";
          throw new Error();
        }
        await followDataBase.getUserById(tokenData.id)
         res.status(201).send({message: "Seguindo com sucesso."})
    } catch (error:any) {
        res.status(500).send(error.message)
        
    }
}

