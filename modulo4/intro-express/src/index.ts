import express, { Request, Response } from "express";
import cors from "cors";
import { getMaxListeners } from "process";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/primeiro-endpoint", (request: Request, response: Response) => {
  response
    .status(200)
    .send({ message: "Parabéns você criou seu primeiro endpoint!!!" });
});

type User = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
};

const user: User[] = [
  {
    id: 1,
    name: "Erica Lima",
    phone: 958632245,
    email: "ericalima@gmail.com",
    website: "avancodatecnologia.com.br",
  },
  {
    id: 2,
    name: "Evelin Lima",
    phone: 998742215,
    email: "evelinlima@gmail.com",
    website: "futuroinfinito.com.br",
  },
  {
    id: 3,
    name: "Inacia Paixaõ",
    phone: 945152478,
    email: "inaciapaixao@gmail.com",
    website: "naoseioqueescerver.com.br",
  },
  {
    id: 4,
    name: "Ivan Joaquim",
    phone: 975142589,
    email: "ivanjoaquim@gmail.com",
    website: "deixaavidamelevar.com.br",
  },
];

app.get("/users",(request: Request, response: Response)=>{
    const filterUsers = user.filter((userCreated)=>{
        return userCreated
    })
    console.log(filterUsers);
    response.status(201).send(
        {message:"Usuário criado."}
    )
})

type Post = {
    id:number,
    title:string,
    body:string,
    userld:number
}

//Você acha melhor criá-los dentro ou fora do array de usuários? Justifique com comentários no código.
//RESPOSTA: Acho melhor fora, porque a array vai está tipada. Acredito que pode evitar de errar algo.

const post:Post[] = [
    {
        id:1,
        title:"Estou quase lá.",
        body:"O mundo é estranho.",
        userld:1
    },
    {
        id:2,
        title:"Estrelas",
        body:"As estrelas do universo são maravilhosas.",
        userld:1
    },
    {
        id:1,
        title:"Pedreiras.",
        body:"Pedras rolando pelo barranco.",
        userld:2
    },
    {
        id:2,
        title:"O tempo passa.",
        body:"Tic, toc, tic, toc,...",
        userld:2
    }
]

app.get("/posts",(request: Request, response: Response)=>{
    const filterposts = post.filter((postCreated)=>{
        return postCreated
    })
    console.log(filterposts );
    response.status(201).send(
        {message:"Post criado."}
    )
})

app.get("/posts/id",(request: Request, response: Response)=>{
    const idPost= Number(request.params.id)
    
    const id = post.find((posts)=>{
        return posts.id === idPost
    })
    console.log(id);
    response.status(201).send(
        {message:"Id do post."}
    )
})


app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
