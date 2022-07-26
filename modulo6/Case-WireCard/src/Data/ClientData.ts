import { CustomError } from "../error/CustomError";
import { Client } from "../Model/Client";
import { BaseData } from "./BaseData";

export class CleintData extends BaseData{
    protected tableName:string = "Client"

    public async createClient (client: Client) : Promise<void>{
       
        try {
            await BaseData.connection(this.tableName).insert({
                id: client.getId(),
                name: client.getName()
            })
        } catch (error:any) {
            
            throw new CustomError(400, error.sqlMessage);
            
        }
    }
}