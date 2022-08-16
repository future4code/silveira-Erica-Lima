import { CuboData } from "../Data/CuboData";
import { CustomError } from "../Error/CustomError";
import { CuboInputDTO, CuboModel } from "../Model/CuboModel";
import { IdGenerator } from "../Services/idGenerator";


export class CuboBusiness {
  constructor( private idGenerator: IdGenerator,
    private cuboData: CuboData) {}
  createCubo = async (input: CuboInputDTO) => {
    try {
       const { first_name, laster_name, participation} = input
      
       if (!first_name || !laster_name || !participation) {
        throw new CustomError(422, "Missing input");
      }
      
      const verifyFirstName = first_name.toLocaleUpperCase();
      const verifyLastertName = laster_name.toLocaleUpperCase();

      const id = this.idGenerator.generate();

      const newCubo = new CuboModel(id, verifyFirstName, verifyLastertName, participation);
      await this.cuboData.createCubo(newCubo);
      return newCubo;
     
    } catch (error: any) {
        throw new CustomError(error.statusCode, error.message);
    }
  };
  selectCubo = async () => {
    try {
       
     const result = await this.cuboData.selectCubo();
     return result
     
    } catch (error: any) {
        throw new CustomError(error.statusCode, error.message);
    }
  };


}

export default CuboBusiness;
