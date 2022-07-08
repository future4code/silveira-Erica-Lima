import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha os campos 'name','password' e 'email'.");
    }
    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserByEmail(email);

    if (!user) {
      res.statusCode = 409;
      throw new Error("Email não cadastrado");
    }
    const hashManager = new HashManager();
    const passwordIsCorrect = hashManager.compare(password, user.getPassword());

    if (!passwordIsCorrect) {
      res.status(401).send("Email ou password incoretos.");
    }
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id: user.getId() });

    res.status(201).send({ token });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
