import { PostData } from "../data/mySQL/PostData";
import { Post, POST_TYPE } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { PostInputDTO } from "../type/PostInputDTO";
import { IncompleteFieldPost, InvalidType } from "../error/customError";


export class PostBusiness{
    constructor(
        private authenticator: Authenticator,
        private hashManager: HashManager,
        private idGenerator: IdGenerator,
        private postData: PostData
      ) {}
      public createPost = async (input: PostInputDTO, token:string) => {
       try {
        const {photo, description, type}= input
        
        
   
    const tokenData = this.authenticator.getTokenData(token);

   

    if (!photo || !description || !type) {
      
      throw new   IncompleteFieldPost();
    }
   
    if (type !== POST_TYPE.evento.toLowerCase() || type !== POST_TYPE.normal.toLowerCase()) {
      
      throw new InvalidType();
    } 
   
    const id = this.idGenerator.generate();

    const author_id = tokenData.id

    const date_creation = new Date().toISOString().split('T')[0];
   
    const newPost = new Post (
      id,
      photo,
      description,
      date_creation,
      type,
      author_id
    );
    await this.postData.createPost(newPost);
    return token
       } catch (error: any) {
        throw new Error(error.message)
       }

      }
      public getPost = async (token, tokenData) =>{
        try {
          if(!tokenData) {
            res.statusCode = 401
            res.statusMessage = "Token inválido"
            throw new Error()
         }
     if (!token) {
      //  res.statusCode = 422;
      //  res.statusMessage = "Token não informado";
       throw new Error();
     }
 
    
 
     const postId = await this.postData.getPostById(id);
     if (!postId) {
       res.statusCode = 406;
       res.statusMessage = "Id inválido";
       throw new Error();
     }
     const verificationPost = {
       id: post.id,
       title: recipeId.title,
       description: recipeId.description,
       preparation_mode: recipeId.preparation_mode,
       date_creation: recipeId.date_creation,
     };
        } catch (error: any) {
          throw new Error(error.message)
        }
      }
}