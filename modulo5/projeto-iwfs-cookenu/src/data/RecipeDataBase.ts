import { Recipe } from "../entities/Types";
import { BaseDataBase } from "./BaseDataBase";

export class RecipeDataBase extends BaseDataBase {
  public async createRecipe(recipe: Recipe): Promise<void> {
    try {
      await BaseDataBase.connection("Recipe").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        preparation_mode:recipe. getPreparationMode(),
        date_creation: recipe.getDateCreation()
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  
}
