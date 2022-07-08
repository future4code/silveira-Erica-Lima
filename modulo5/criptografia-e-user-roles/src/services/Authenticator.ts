import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";


export class Authenticator {

    generateToken(info: authenticationData): string{

        return jwt.sign(
            {id: info.id,
            role: info.role},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRATIONz_TIME}
        );
    }

    getTokenData(token: string): authenticationData  {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload as authenticationData

    }
}