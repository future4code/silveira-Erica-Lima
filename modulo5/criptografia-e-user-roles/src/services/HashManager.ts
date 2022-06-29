import * as bcrypt from "bcryptjs";

export default function HashManager ( ) { 
    
    const  generateHash = async (textToHide: string)=> {
    const cost = Number(process.env.BCRYPT_COST!);
    const salt = await bcrypt.genSalt(cost);
    const cypherText = await bcrypt.hash(textToHide, salt);
 
    
    return cypherText;
}

const compare = async (textToHide: string, hash: string): Promise<boolean> => {
 const hashCompare:boolean = await bcrypt.compare(textToHide, hash);
    return hashCompare;

}
 }
  