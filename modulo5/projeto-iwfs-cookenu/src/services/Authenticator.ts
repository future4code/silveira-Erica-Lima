import * as jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();
export interface AuthenticationData{
    id: string
}

export class Authenticator {
    public generateToken = (input: AuthenticationData): string=> {
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
        )

        return tokenData as AuthenticationData
    }
}