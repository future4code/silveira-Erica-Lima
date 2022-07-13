import { Personagem } from "./types";

export const validateCharacter = (input : Personagem) : boolean =>{
if(!input.name|| !input.life === undefined ||  !input.defense === undefined ||  !input.strength === undefined){
    return false
}
if( input.life <= 0 ||  input.defense  <= 0  ||  input.strength <= 0 ){
    return false
}
return true
}