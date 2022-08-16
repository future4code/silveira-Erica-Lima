import { AuthenticationData } from "../../src/Services/tokenGenerator"

export class TokenGeneratorMock {
    public generate = (input: AuthenticationData): string => {
        return "token"
    }
 
    public verify(token: string) {
        return {
            id: "id_mock"
            
        }
    }
}

