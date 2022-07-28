import { CustomError } from "../Error/CustomError";
import { HashGenerator } from "../Services/hashGenerator";
import { IdGenerator } from "../Services/idGenerator";
import { TokenGenerator } from "../Services/tokenGenerator";
import { ClientData } from "../Data/ClientData";
import { Client } from "../Model/Client";
import { ClientInputDTO } from "../Types/ClientInputDTO";

export class ClientBusiness {
    constructor(
        private clientData: ClientData
      ) {}
      public client = async(input:ClientInputDTO ) => {
        try {
            const{id} = input
            if (!id ) {
                throw new CustomError(422, "Missing input");
              }

              const newClient = new Client(id)

              await this.clientData.createClient(newClient)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
      }
}