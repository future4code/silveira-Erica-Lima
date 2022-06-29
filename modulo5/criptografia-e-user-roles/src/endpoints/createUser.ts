import { Request, Response } from "express";
import { connection } from "../data/connection";
import HashManager from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";
// import { HashManager } from "../services/HashManager";


export default async function createUser(res: Response, req: Request): Promise<void>{
 try {
    const {email, password} = req.body;
    if(!email || !password){
        res.statusCode = 422
        throw new Error("Preencha todos os campos.");
        
    }
    if ( email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
    const user = await connection("User").where({email})

    if(user){
        res.statusCode = 409 
        throw new Error("Emailjá cadastrado.");
    }
    const id: string = new IdGenerator().generateId()

     const hashManager :any= new HashManager()

    // const hashPassword = await hash(userData.password);

 const passwordCriptografada = hashManager.generateHash(password)

const newUser: user = {
    id,
    email,
    password
    // password:passwordCriptografada
}

const result  = await connection("User").insert(newUser)
res.status(201).send({result})
 } catch (error:any) {
    console.log(error)
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
 }   
}