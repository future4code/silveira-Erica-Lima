import {app} from "./app";
import { login } from "./endpoints/Login";
import { signup } from "./endpoints/Signup";
import { profile } from "./endpoints/Profile";
import { createRecipe } from "./endpoints/CreateRecipe";
import { getUser } from "./endpoints/GetUser";


//User
app.get("/user/profile", profile)
app.post("/user/signup", signup)
app.post("/user/login", login)

//Recipe
app.post("/recipe", createRecipe)
app.get("/user/:id", getUser)