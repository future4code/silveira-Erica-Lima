import { Post} from "../../model/Post";
import { BaseDataBase } from "./BaseDataBase";

export class PostData extends BaseDataBase {
  public async createPost(post: Post): Promise<void> {
    try {
      await BaseDataBase.connection("LaBook_Post").insert({
        id: post.getId,
        photo: post.getPhoto,
        description: post.getDescription,
        date_creation: post.getDateCreation,
        type: post.getType,
        author_id: post.getAuthorId
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async getPostById(id: string): Promise<any> {
    try {
        const [postId] = await BaseDataBase.connection("LaBook_Post")
           .select("id", "photo"," description", "date_creation", "date_creation", "type")
           .where({ id: id })
           
      return postId 
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}