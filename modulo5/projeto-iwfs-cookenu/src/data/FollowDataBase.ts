import { Follow } from "../entities/Types";
import { BaseDataBase } from "./BaseDataBase";

export class FollowDataBase extends BaseDataBase {
  public async createRecipe(follow: Follow): Promise<void> {
    try {
      await BaseDataBase.connection("Follow").insert({
        id_followed: follow.getIdFollowed(),
        id_follow: follow.getIdFollow()
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async getUserById(id: string): Promise<any> {
    try {
        const [userId] = await BaseDataBase.connection("Follow")
           .select( "id_followed", "id_follow")
           .where({ Signup.id })
           
      return userId 
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
} 