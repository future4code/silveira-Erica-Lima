import {app} from "./app";
import { signup } from "./endpoints/Signup";


app.post("/user/signup", signup)