import { Personagem } from "./types";
import { validateCharacter } from "./validateCharacter";

export const performAttack = (attacker: Personagem, defender: Personagem) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };

  export const performAttack2 = (
    attacker: Personagem,
    defender: Personagem,
    validator: (input: Personagem) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };
  