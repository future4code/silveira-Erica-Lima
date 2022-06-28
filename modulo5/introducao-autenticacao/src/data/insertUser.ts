import {connection} from "./connetion"

export const insertUser =async (id:string, email:string, password: string) => {
    await connection("User").insert({id:id,email:email, password:password})
}