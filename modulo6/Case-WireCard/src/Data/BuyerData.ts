import { CustomError } from "../Error/CustomError";
import {Buyer} from "../Model/Buyer";
import { BaseData } from "./BaseData";

export class BuyerData extends BaseData{
    protected tableName:string = "Buyer"

    public async createBuyer(buyer: Buyer) : Promise<void>{
        
        try {
            await BaseData.connection(this.tableName).insert({
                id: buyer.getId(),
                name: buyer.getName(),
                email: buyer.getEmail(),
                cpf: buyer.getCpf()
            })
        } catch (error:any) {
            
            throw new CustomError(400, error.sqlMessage);
            
        }
    }


    public async findBuyerByEmail(email:string) : Promise<Buyer | undefined>{

        try {
           const buyer = await BaseData.connection(this.tableName).select("*")
            .where({email: email})
            return buyer[0] && Buyer.toUserModel(buyer[0])
        }   
        catch (error:any) {
            console.log(error)
            throw new CustomError(400, error.sqlMessage);

        }
    }

    public async getBuyerById(id:string) : Promise<Buyer | undefined>{

        try {
           const [buyer]:Buyer[] = await BaseData.connection(this.tableName).select("*")
            .where({id})
            
            return buyer
        }
        catch (error:any) {
            console.log(error)
            throw new CustomError(400, error.sqlMessage);

        }
    }
    public async findBuyerByCpf(cpf:string) : Promise<Buyer | undefined>{

        try {
           const [buyer]:Buyer[] = await BaseData.connection(this.tableName).select("*")
            .where({id})
            return buyer
        }
        catch (error:any) {
            console.log(error)
            throw new CustomError(400, error.sqlMessage);

        }
    }
    
} 
