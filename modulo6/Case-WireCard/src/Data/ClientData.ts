import { CustomError } from "../Error/CustomError";
import { Client } from "../Model/Client";
import { BaseData } from "./BaseData";

export class ClientData extends BaseData{
    protected tableName:string = "Client"

    public async createClient (client: Client) : Promise<void>{
       
        try {
            await BaseData.connection(this.tableName).insert({
                id: client.getId(),

                
            })
        } catch (error:any) {
            
            throw new CustomError(400, error.sqlMessage);
            
        }
    }
    public async getClientById(id:string) : Promise<Client | undefined>{

        try {
           const [client]:Client[] = await BaseData.connection(this.tableName).select("*")
            .where({id})
            return client
        }
        catch (error:any) {
            console.log(error)
            throw new CustomError(400, error.sqlMessage);
    
        }
    }
}