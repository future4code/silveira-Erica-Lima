import { CustomError } from "../Error/CustomError";
import { Product } from "../Model/Product";
import { BaseData } from "./BaseData";

export class ProductData extends BaseData {
  protected tableName: string = "PRODUCT";

  public async createProduct(product: Product): Promise<void> {
    try {
      await BaseData.connection(this.tableName).insert({
        id: product.getId(),
        name: product.getName(),
        tags: product.getTags(),
      });
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  }
}
