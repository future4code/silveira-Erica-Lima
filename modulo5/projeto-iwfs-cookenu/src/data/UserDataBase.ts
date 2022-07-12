import { User } from "../entities/Types";
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
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async getAllUser(tokenData: string): Promise<User[]> {
    try {
      
     
        const user = await BaseDataBase.connection("Signup")
           .select( "id", "name","email")
           .where({ id: tokenData })
           
        
        return user.map((user => User.toUserModel(user))) 
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async getUserById(id: string): Promise<any> {
    try {
      
     
        const [userId] = await BaseDataBase.connection("Signup")
           .select( "id", "name","email")
           .where({ id: id })
           
      return userId 
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
