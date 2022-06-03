import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data/users";
import { User, UserType } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

//Exercício 1
//a.Método GET.
//b.

app.get("/users/:id", (request: Request, response: Response) => {
  let codeError: number = 400;
  try {
    const id: number = Number(request.params.id);
    if (isNaN(id)) {
      codeError = 422;
      throw new Error("O id precisa ser um número.");
    }
    const searchUser = users.find((users) => {
      return users.id === id;
    });
    if (!searchUser) {
      codeError = 404;
      throw new Error("Não encontrado usuários");
    }
    response.status(200).send({ searchUser });
  } catch (error) {
    response.status(codeError).send({ message: "Erro na requisição." });
  }
});

//Exercício 2
//a. Método GET
//b. app.get "/users"
app.get("/users", (request: Request, response: Response) => {
  let codeError: number = 400;
  try {
    let type: string = request.query.type as string;
    // const tratando = type.toUpperCase()
    const userType: User[] = users.filter((types) => {
      return types.type.toUpperCase() === type;
    });
    
    // if (typeof type === "string" || !userType || "NORMAL" !== type|| "ADMIN" !== type) {
    //   codeError = 404;
    //   throw new Error("Não encontrado a requisição de type.");
    // } 
    if ( !userType) {
        codeError = 404;
        throw new Error("Não encontrado a requisição de type.");
       } 

    response.status(200).send(userType);
  } catch (Error) {
    response.status(codeError).send({ message: "Erro na requisição." });
  }
});

// Exercício 3
//a.Path parameters
app.get("/users/search/:name", (request: Request, response: Response) => {
  let codeError: number = 400;
  try {
    const name: string = String(request.params.name);
    if (!name) {
      codeError = 422;
      throw new Error("O id precisa ser um nome.");
    }
    const searchUser = users.find((users) => {
      return users.name === name;
    });
    if (!searchUser) {
      codeError = 404;
      throw new Error("Não encontrado usuários");
    }
    response.status(200).send({ searchUser });
  } catch (error) {
    response.status(codeError).send({ message: "Erro na requisição. Usuário não encontrado!" });
  }
});

//Exercício 4
app.post("/users/add",(request: Request, response: Response)=>{
  let codeError: number = 400;
  try {
    const {id, name, email, type, age} = request.body 
    const u
    response.status(200).send();
  } catch (error) {
    response.status(codeError).send({ message: "Erro na requisição. Usuário não adicionado!" });
  }
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
