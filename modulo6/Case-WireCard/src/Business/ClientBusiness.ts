import { CustomError } from "../Error/CustomError";

import { HashGenerator } from "../Services/hashGenerator";
import { IdGenerator } from "../Services/idGenerator";
import { TokenGenerator } from "../Services/tokenGenerator";

import { ClientData } from "../Data/ClientData";
import { Client } from "../Model/Client";
import { ClientInputDTO } from "../Types/ClientInputDTO";

export class ClientBusiness {


  constructor(
    private clientData: ClientData,
    private idGenerator: IdGenerator
  ) {}
  client = async (input: ClientInputDTO) => {
    try {
      const id = this.idGenerator.generate();
      const newClient = new Client(id);

      await this.clientData.createClient(newClient);
      return newClient;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
