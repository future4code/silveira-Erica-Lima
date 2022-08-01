import { Request, Response } from "express";
import selectAllType from "../data/selectAllType";

export const getAllUsersType = async(req: Request,res: Response): Promise<void> =>{
    try {
       const type = req.params.type;
       const users = await selectAllType()
       if (!type){
        res.statusCode = 404
        throw new Error("No users found")
       }
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }