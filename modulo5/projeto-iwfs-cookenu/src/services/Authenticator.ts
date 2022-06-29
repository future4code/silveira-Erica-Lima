import * as jwt from "jsonwebtoken"

export interface AuthenticationData{
    id: string
}

export class Authenticator {
    public generateToken = (input: AuthenticationData): string=> {
       return jwt.sign(
            input,
            process.env.JWT_KEY as string, 
            {
                expiresIn: "15m"
            }
        )
    }

    public getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token,  process.env.JWT_KEY as string, 
        )

        return tokenData
    }
}