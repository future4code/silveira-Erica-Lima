import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong! 🏓");
});

type Afazeres = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const afazeres: Afazeres[] = [
  {
    userId: 1,
    id: 1,
    title: "Acordar cedo.",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Lavar louça.",
    completed: false,
  },
  {
    userId: 2,
    id: 1,
    title: "Acordar até a tarde.",
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: "Comer chocolate.",
    completed: true,
  },
];

app.get("/afazeres-concluidos/:status",(req:Request, res:Response)=>{

    let status: string | boolean = req.params.status
    console.log(status);

    if(status === "true" ){
        status = true
    } else if(status === "false") {
        status = false
    }

    const afazeresConcluidos = afazeres.filter((tarefas)=>{
        return tarefas.completed === status
    })
    res.status(200).send({afazeresConcluidos})
    
})

app.post("/add-afazeres/:add",(req:Request, res:Response)=>{
    const afazeresAuth = req.headers.auth
    const add = req.params.add

    if(!afazeresAuth){
        return res.status(400).send("Error!!!");
      }

      
    const newAfazeres:Afazeres = {
        userId: req.body.userId,
        id:Number(Date.now().toString()),
        title: req.body.title,
        completed: req.body.completed
    }

    const addTarefa = afazeres.filter((tarefa)=>{
        return tarefa.userId ===  Number(add)
    })

    addTarefa.push(newAfazeres)
    res.status(200).send(addTarefa)
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
