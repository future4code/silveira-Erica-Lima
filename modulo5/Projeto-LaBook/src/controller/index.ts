import {app} from "./app";
import UserController from "./UserController";

const userController = new UserController()

app.post("/sinup", userController.signup)
app.post("/login", userController.login)