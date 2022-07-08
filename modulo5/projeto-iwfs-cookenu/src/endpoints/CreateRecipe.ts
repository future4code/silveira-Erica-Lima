import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { Recipe } from "../entities/Types";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export async function createRecipe(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);

    const { title, description, preparation_mode } = req.body;

    if (!title || !description || !preparation_mode) {
      res.statusCode = 422;
      throw new Error("Preencha os campos 'name','password' e 'email'.");
    }
   
    const recipeDataBase = new RecipeDataBase();
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const creator_id = tokenData.id

    const date_creation = new Date().toISOString().split('T')[0];
   
    const newRecipe = new Recipe(
      id,
      title,
      description,
      preparation_mode,
      date_creation,
      creator_id
    );
    await recipeDataBase.createRecipe(newRecipe);
    res.status(201).send({ tokenData });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
