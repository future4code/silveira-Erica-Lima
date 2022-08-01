import { connection } from "./baseDataBase"





export default async function selectAllType():Promise<any> {
    const result = await connection.raw(`
       SELECT  type
       FROM aula49_exercicio;
    `)
 
    return result[0]
 }