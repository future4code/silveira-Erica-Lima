import { Router } from "express"
import { UserDataBase } from "../../data/mySQL/UserData";
import { UserBusiness } from "../../business/UserBusiness";
import UserController from "../UserController";

export const userRouter = Router()

const userDataBase = new UserDataBase()
// const userBusiness = new UserBusiness()
// const userController = new UserController(userBusiness)

// userRouter.post("/signup", userController.signup)