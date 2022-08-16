import { Buyer } from "../../src/Model/Buyer"
import { buyerMock1, buyerMock2 } from "./BuyerMock"

export class BuyerDatabaseMock {
    public async insert(buyer: Buyer): Promise<void> { }

    public async getBuyerByEmail(email: string): Promise<Buyer | undefined> {
        switch (email) {
            case "ericatest@gmail.com":
                return buyerMock1
            case "evelintest@gmail.com":
                return buyerMock2
            default:
                return undefined
        }
    }
    public async getBuyerByCpf(cpf: string): Promise<Buyer | undefined> {
        switch (cpf) {
            case  "36554897825":
                return buyerMock1
            case "25487632258":
                return buyerMock2
            default:
                return undefined
        } 
       
    }
    public async getBuyerById(id: string): Promise<Buyer | undefined> {
        switch (id) {
            case "id_buyer_1":
                return buyerMock1
            case "id_buyer_2":
                return buyerMock2
            default:
                return undefined
        }
    }
} 
 