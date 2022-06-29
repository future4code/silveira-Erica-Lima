import { Request, Response } from "express";
import {app} from "./app"
import createUser from "./endpoints/createUser"

 app.post("/user/signup", createUser)



