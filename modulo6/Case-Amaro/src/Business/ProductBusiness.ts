import { ProductData } from "../Data/ProductData";
import { CustomError } from "../Error/CustomError";
import { Product, ProductInputDTO } from "../Model/Product";
import { IdGenerator } from "../Services/idGenerator";

export class ProductBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private productData: ProductData
  ) {}
  createProduct = async (input: ProductInputDTO) => {
    try {
      const { name, tags } = input;
      if (!name || !tags) {
        throw new CustomError(422, "Missing input");
      }


      const verifyName = name.toLocaleUpperCase();
      const verifyTags = tags.toLocaleLowerCase();

      const id = this.idGenerator.generate();
      const newProduct = new Product(id, verifyName, verifyTags);
      await this.productData.createProduct(newProduct);
      return newProduct;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  getName = async(name:string) => {
    try{
      const verifyName = name.toLocaleUpperCase()
      if(!verifyName){
        throw new CustomError(422, "Missing input");
      }
      return await this.productData.findProductByName(name)
    } catch (error:any) {
        throw new CustomError(error.statusCode, error.message);
    }
  }

  getName = async (name: string) => {
    try {
      const verifyName = name.toLocaleUpperCase();
      if (!verifyName) {
        throw new CustomError(422, "Missing input");
      }

      return await this.productData.findProductByName(name);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

}

export default ProductBusiness;
