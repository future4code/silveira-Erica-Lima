import { PostBusiness } from "../business/PostBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { UserData } from "../data/mySQL/UserData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import {app} from "./app";
import UserController from "./UserController";
import { PostController } from "./PostController";
import { PostData } from "../data/mySQL/PostData";

const userBusiness = 
    new UserBusiness(
        new Authenticator(),
        new HashManager(),
        new IdGenerator(),
        new UserData()
    )

const userController = new UserController(userBusiness)

const postBusiness = 
    new PostBusiness(
        new Authenticator(),
        new HashManager(),
        new IdGenerator(),
        new PostData()
    )

const postController = new PostController(postBusiness)

app.post("/user/signup", userController.signup)
 app.post("/user/login", userController.login)

 app.post("/post/create", postController.createPost)
 app.get("/post/:id", postController.getPost)