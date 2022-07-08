import { user } from "../types"
import {connection} from "./connection"


export  const insertUser =  async (id:string, email:string, password: string): Promise<void> =>{
        await connection("User").insert({id:id,email:email, password:password})
    }
