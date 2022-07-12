import {compareSync, genSaltSync, hashSync} from "bcryptjs"

export class HashManager{
    public  hash(text:string):string{
        const cost = 12
        const salt:string =  genSaltSync(cost)
        const cypherText: string = hashSync(text, salt)

        return cypherText
    } 
    public compare(text:string, hash: string): boolean{
        return compareSync(text, hash)
    }
}