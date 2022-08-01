import { connection } from "./baseDataBase"

export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT  name
       FROM aula49_exercicio;
    `)
 
    return result[0]
 }

 
