import { POST_TYPE } from "../model/Post"

export type PostInputDTO = {
    photo: string,
    description: string,
    date_creation: string,
    type?: POST_TYPE,
    token: string
   
}