import { UserData } from "../data/UserData";
import { userInput } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

class UserBussines {
  async signUp(user: userInput) {
    const { name, nickname, email, password, role } = user;

    if (!name || !nickname || !email || !password || !role) {
      throw new Error(
        'Preencha os campos "name","nickname", "email" e "password"'
      );
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = hashManager.hash(password);

    const userData = new UserData();

    await userData.insertUser({
      id,
      name,
      nickname,
      email,
      password: hashPassword,
      role,
    });

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id, role: role });

    return token;
  }

  async login() {}
}

export default UserBussines;
