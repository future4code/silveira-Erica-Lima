import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { Authenticator } from "../services/Authenticator";


export async function getRecipe(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const token = req.headers.authorization as string;
    
    if (!id) {
      res.statusCode = 406;
      res.statusMessage = "Id não informado";
      throw new Error();
    }
    const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token) 
  
        if(!tokenData) {
           res.statusCode = 401
           res.statusMessage = "Token inválido"
           throw new Error()
        }
    if (!token) {
      res.statusCode = 422;
      res.statusMessage = "Token não informado";
      throw new Error();
    }

    const recipeDataBase = new RecipeDataBase();

    const recipeId = await recipeDataBase.getRecipeById(id);
    if (!recipeId) {
      res.statusCode = 406;
      res.statusMessage = "Id inválido";
      throw new Error();
    }
    const verificationRecipe = {
      id: recipeId.id,
      title: recipeId.title,
      description: recipeId.description,
      preparation_mode: recipeId.preparation_mode,
      date_creation: recipeId.date_creation,
    };

    res.status(200).send({ recipe: verificationRecipe });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
