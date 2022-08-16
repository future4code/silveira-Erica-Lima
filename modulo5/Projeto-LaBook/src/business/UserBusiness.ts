<<<<<<< HEAD
export default class UserBusiness{
    const
}
=======
import { UserData } from "../data/mySQL/UserData";
import { IncompleteField, IncompleteFieldLogin, InvalidEmail, InvalidPassword, InvalidPasswordIsCorrect, InvalidUser } from "../error/customError";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../type/LoginInputDTO";
import { SignupInputDTO } from "../type/SignupInputDTO";


export class UserBusiness {
  constructor(
    private authenticator: Authenticator,
    private hashManager: HashManager,
    private idGenerator: IdGenerator,
    private userData: UserData
  ) {}
  public signup = async (input: SignupInputDTO) => {
    try {
      const { name, email, password } = input

      if (!name || !email || !password) {
       
        throw new IncompleteField();
      }
      if (password.length < 6) {
        
        throw new InvalidPassword();
      }
      if (!email.includes("@") || !email.includes(".com")) {
        
        throw new InvalidEmail();
      }

      const user = await this.userData.findUserByEmail(email);

      if (user) {
       
        throw new InvalidUser();
      }

      const id = this.idGenerator.generate();

      const hashPassword = this.hashManager.hash(password);

      const newUser = new User(id, name, email, hashPassword);
      await this.userData.createUser(newUser);

      const token = this.authenticator.generateToken({ id });
      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public login = async (input: LoginInputDTO) => {
    try {
        const { email, password} = input
        if(!email || !password){
            
            throw new IncompleteFieldLogin();
        }
          
          const user = await this.userData.findUserByEmail(email)

          if (!user) {
          
            throw new InvalidUser()
         }
         
         const passwordIsCorrect = this.hashManager.compare(password, user.getPassword())

         if (!passwordIsCorrect) {
          throw new InvalidPasswordIsCorrect()
         }
         
         const token = this.authenticator.generateToken({id: user.getId()})
         return token
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
>>>>>>> master
