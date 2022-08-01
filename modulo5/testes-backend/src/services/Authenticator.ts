import * as jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

export interface authenticationData {
    id: string;
    role: string;
  }
  


export class Authenticator {
    public generateToken = (input: authenticationData): string=> {
       return jwt.sign(
            input,
            process.env.JWT_KEY as string, 
            {
                expiresIn: "2h"
            }
        )
    }

    public getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token,  process.env.JWT_KEY as string, 
        ) as any
        const result = { id: tokenData.id, role: tokenData.role };
        return result

        return tokenData as authenticationData
    }
}