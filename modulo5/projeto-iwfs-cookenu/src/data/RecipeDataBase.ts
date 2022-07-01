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
        date_creation: recipe.getDateCreation(),
        creator_id:recipe.getCreatorId()
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async getRecipeById(id: string): Promise<any> {
    try {
        const [recipeId] = await BaseDataBase.connection("Recipe")
           .select("id", "title"," description", " preparation_mode", "date_creation")
           .where({ id: id })
           
      return recipeId 
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
