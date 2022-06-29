import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  public async createUser(user: User): Promise<void> {
    try {
      await BaseDataBase.connection("Signup").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      });
    } catch (error: any) {
      console.log("creteUser")
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDataBase.connection("Signup")
        .select("*")
        .where({ email: email });
      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      console.log(2)
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
