import { PostData } from "../data/mySQL/PostData";
import { Post, POST_TYPE } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { PostInputDTO } from "../type/PostInputDTO";
import {
  IncompleteFieldPost,
  InvalidPostId,
  InvalidType,
} from "../error/customError";

export class PostBusiness {
  constructor(
    private authenticator: Authenticator,
    private hashManager: HashManager,
    private idGenerator: IdGenerator,
    private postData: PostData
  ) {}
  public createPost = async (input: PostInputDTO) => {
    try {
      const { photo, description, type, token } = input;

      const tokenData = this.authenticator.getTokenData(token);
      if (!tokenData) {
        throw new Error("Token inválido");
      }

      if (!description) {
        throw new IncompleteFieldPost();
      }

      if (type !== POST_TYPE.evento && type !== POST_TYPE.normal) {
        throw new InvalidType();
      }

      const id = this.idGenerator.generate();

      const author_id = tokenData.id;

      const date_creation = new Date().toISOString().split("T")[0];

      const newPost = new Post(
        id,
        photo,
        description,
        date_creation,
        type,
        author_id
      );
      await this.postData.createPost(newPost);
      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public getPost = async (id: string, token: string) => {
    try {
      if (!token) {
        throw new Error("Precisa do token");
      }

      const tokenData = this.authenticator.getTokenData(token);
      if (!tokenData) {
        throw new Error("Token inválido");
      }

      const postId = await this.postData.getPostById(id);
      if (!postId) {
        throw new InvalidPostId();
      }

      return postId;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
