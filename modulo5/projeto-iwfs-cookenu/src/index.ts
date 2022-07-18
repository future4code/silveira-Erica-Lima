import {app} from "./app";
import { login } from "./endpoints/Login";
import { signup } from "./endpoints/Signup";
import { profile } from "./endpoints/Profile";
import { createRecipe } from "./endpoints/CreateRecipe";
import { getUser } from "./endpoints/GetUser";
import {getRecipe} from "./endpoints/GetRecipe"


//User
app.get("/user/profile", profile)
app.post("/user/signup", signup)
app.post("/user/login", login)
app.get("/user/:id", getUser)
//Recipe
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipe)