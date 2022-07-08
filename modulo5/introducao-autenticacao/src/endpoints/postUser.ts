import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateId } from "../services/Exercicio1";
import { generateToken } from "../services/Exercicio3";

export const postUser = async (req: Request, res: Response) => {
    try {
      const {email, password} = req.body;
      if (!email || email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      
      if (!password || password.length < 6) {
        throw new Error("Invalid password");
      }
  
      const userData = {
        email,
        password
      };
  
      const id = generateId();
  
    
      await insertUser(id, userData.email, userData.password);
  
      const token = generateToken({
        id
      });
  
      res.status(200).send({
        token,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };