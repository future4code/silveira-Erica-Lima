import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../type/PostInputDTO";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}
  public createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, date_creation, type } = req.body;
      const token = req.headers.authorization as string;
      const input: PostInputDTO = {
        photo,
        description,
        date_creation,
        type,
        token,
      };
      const createPost = await this.postBusiness.createPost(input);
      res.status(201).send({createPost});
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };
  public getPost = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const token = req.headers.authorization as string;

      const post = await this.postBusiness.getPost(id, token);
      res.status(200).send({ post });
    } catch (error: any) {}
  };
}
