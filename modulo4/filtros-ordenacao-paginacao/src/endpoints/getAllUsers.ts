import { Request, Response } from "express"
import selectAllUsers from "../data/select"

export const getAllUsersName = async(req: Request,res: Response): Promise<void> =>{
   try {
      const name = req.query.name;
      const users = await selectAllUsers()


      if(!name ){
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

