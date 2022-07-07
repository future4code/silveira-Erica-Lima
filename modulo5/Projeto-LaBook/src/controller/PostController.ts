import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../type/PostInputDTO";

export class PostController{
    constructor(
        private postBusiness: PostBusiness
      ) {}
      public createPost = async (req: Request, res: Response) => {
        try {
            const {photo, description, date_creation, type}= req.body
            const token = req.headers.authorization as string;
         const input: PostInputDTO = {
            
            photo, 
            description, 
            date_creation,
            type
         
         }
        const create= await this.postBusiness.createPost(input, token)
         res.status(201).send({create})
        } catch (error: any) {
            res.status(500).send(error.message)
        }
      }
      public getPost = async (req: Request, res: Response) =>{
        try {
          const id =req.params.id
          const token = req.headers.authorization as string;
        
          
        } catch (error: any) {
          
        }
      }
}