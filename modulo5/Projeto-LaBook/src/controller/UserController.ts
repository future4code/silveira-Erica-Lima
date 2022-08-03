import { Request, Response } from "express";
<<<<<<< HEAD
import { SignupInputDTO } from "../type/SignupInputDTO";

export default class UserController{
   async  signup  (req: Request, res: Response) {
    try {
        const {name, email, password} = req.body

    const input: SignupInputDTO = {
        name,
        email,
        password
    }
    } catch (error) {
        
    }
   }
   login = async (req: Request, res: Response) => {

   }
}
=======
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO } from "../type/LoginInputDTO";
import { SignupInputDTO } from "../type/SignupInputDTO";

export default class UserController {
  constructor(private userBusiness: UserBusiness) {}
  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: SignupInputDTO = {
        name,
        email,
        password,
      };
      const token = await this.userBusiness.signup(input);
      res.status(201).send({ token });
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };
  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };
      const token = await this.userBusiness.login(input);
      res.status(200).send({ token });
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };
}
>>>>>>> master
