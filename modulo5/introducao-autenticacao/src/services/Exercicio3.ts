import * as jwt from 'jsonwebtoken'
import { authenticationData } from "../type";


 export  const generateToken = (input: authenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn:" 1h"
      }
    );
    return token;
  }

