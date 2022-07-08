import { app } from "./app";
import { postUser } from "./endpoints/postUser";
import {generateToken} from "./services/Exercicio3"

app.post("/user/signup", postUser)