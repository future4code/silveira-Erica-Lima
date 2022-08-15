import { CustomError } from "../Error/CustomError";
import { HashGenerator } from "../Services/hashGenerator";
import { IdGenerator } from "../Services/idGenerator";
import { TokenGenerator } from "../Services/tokenGenerator";
import { BuyerData } from "../Data/BuyerData";
import { Buyer } from "../Model/Buyer";
import { BuyerInputDTO } from "../Types/BuyerInputDTO";

export class BuyerBusiness {
  constructor(
    private hashGenerator: HashGenerator,
    private idGenerator: IdGenerator,
    private tokenGenerator: TokenGenerator,
    private buyerData: BuyerData
  ) {}
  public async buyer(input:BuyerInputDTO) {
    try {
      const {name, email, cpf} = input
      if (!name || !email || !cpf) {
        throw new CustomError(422, "Missing input");
      }
      if (cpf.length > 11  || cpf.length < 11  ) {
        throw new CustomError(422, "Invalid CPF");
      }
      if (!email.includes("@") || !email.includes(".com")) {
        throw new CustomError(422, "Invalid email");
      }
      const buyer = await this.buyerData.findBuyerByEmail(email);

      if (buyer) {
        throw new CustomError(401, "Invalid credentials");
      }
      const id = this.idGenerator.generate();
      const newBuyer = new Buyer(id, name, email, cpf);

      await this.buyerData.createBuyer(newBuyer);

      const acessToken = this.tokenGenerator.generate({id})
      return acessToken;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }
}
