import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export async function getUser(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const token = req.headers.authorization as string;

    if (!id) {
      res.statusCode = 406;
      res.statusMessage = "Id não informado";
      throw new Error();
    }

    if (!token) {
      res.statusCode = 422;
      res.statusMessage = "Token não informado";
      throw new Error();
    }

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      res.statusMessage = "Token inválido";
      throw new Error();
    }
    const userDataBase = new UserDataBase();

    const userId = await userDataBase.getUserById(id);
    if (!userId) {
      res.statusCode = 406;
      res.statusMessage = "Id inválido";
      throw new Error();
    }
    const verificationUser = {
      id: userId.id,
      name: userId.name,
      email: userId.email,
    };

    res.status(200).send({ user: verificationUser });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
