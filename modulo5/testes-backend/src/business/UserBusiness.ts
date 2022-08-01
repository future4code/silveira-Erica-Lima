import { UserDataBase } from "../data/MySQL/UserDataBase";
import { CustomError } from "../error/CustomError";
import { stringToUserRole, User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    constructor( 
       private idGenerator: IdGenerator,
       private hashManager: HashManager,
       private authenticator: Authenticator,
       private userDatabase: UserDataBase
    ) {
 
    }
 
 
    public async signup(
       name: string,
       email: string,
       password: string,
       role: string
    ) {
       try {
          if (!name || !email || !password || !role) {
             throw new CustomError(422, "Missing input");
          }
 
          if (email.indexOf("@") === -1) {
             throw new CustomError(422, "Invalid email");
          }
 
          if (password.length < 6) {
             throw new CustomError(422, "Invalid password");
          }
 
          const id = this.idGenerator.generate();
 
          const cypherPassword = await this. hashManager.hash(password);
 
          await this.userDatabase.createUser(
             new User(id, name, email, cypherPassword, stringToUserRole(role))
          );
 
          const accessToken = this. authenticator.generateToken({
             id,
             role,
          });
          return { accessToken };
       } catch (error: any) {
          if (error.message.includes("key 'email'")) {
             throw new CustomError(409, "Email already in use")
          }
 
          throw new CustomError(error.statusCode, error.message)
       }
 
    }
 
    public async login(email: string, password: string) {
 
       try {
          if (!email || !password) {
             throw new CustomError(422, "Missing input");
          }
 
          const user = await this.userDatabase.findUserByEmail(email);
 
          if (!user) {
             throw new CustomError(401, "Invalid credentials");
          }
          const isPasswordCorrect = await this.hashManager.compare(
            password,
            user.getPassword()
         );
 
          if (!isPasswordCorrect) {
             throw new CustomError(401, "Invalid credentials");
          }
 
          const accessToken = this.authenticator.generateToken({
             id: user.getId(),
             role: user.getRole(),
          });
 
          return { accessToken };
       } catch (error: any) {
          throw new CustomError(error.statusCode, error.message)
       }
    }
 }
 
 export default new UserBusiness(
    new IdGenerator(),
    new HashManager(),
    new Authenticator(),
    new UserDataBase()
 )