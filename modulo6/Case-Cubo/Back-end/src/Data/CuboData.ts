import { CustomError } from "../Error/CustomError";
import { CuboModel } from "../Model/CuboModel";
import { BaseData } from "./BaseData";

export class CuboData extends BaseData {
  protected tableName: string = "CUBO";

  public async createCubo(cubo: CuboModel): Promise<void> {
    try {
      await BaseData.connection(this.tableName).insert({
        id: cubo.getId(),
        first_name: cubo.getFirstName(),
        laster_name: cubo.getLasterName(),
        participation: cubo.getParticipation()
      });
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  }
}
