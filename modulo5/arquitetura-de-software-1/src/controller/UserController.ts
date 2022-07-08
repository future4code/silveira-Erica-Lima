import { Request, Response } from "express";
import UserBussines from "../Bussines/UserBussines";
import {userInput } from "../model/User";

class UserController {

    async signUp(req: Request, res: Response) {
        try {
            const { name, nickname, email, password, role } = req.body

            const newUser: userInput = {
                name,
                nickname,
                email,
                password,
                role
            }

            const userBussines = new UserBussines()

           
            const token = await userBussines.signUp(newUser)

            res.status(201).send({ message: "usuario criado com sucesso", token })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {

    }
}

export default UserController