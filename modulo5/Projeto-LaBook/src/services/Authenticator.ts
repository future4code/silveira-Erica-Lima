<<<<<<< HEAD
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { authenticationData } from "../type/Types";

dotenv.config();

export class Authenticator {
  public generateToken = (input: authenticationData): string => {
    return jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: "2h",
    });
  };

  public getTokenData = (token: string) => {
    const tokenData = jwt.verify(token, process.env.JWT_KEY as string);

    return tokenData as authenticationData;
  };
}
=======
import * as jwt from "jsonwebtoken"
import { authenticationData } from "../type/autheData"



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
        )

        return tokenData as authenticationData
    }
}
>>>>>>> master
