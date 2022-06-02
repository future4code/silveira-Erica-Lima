import express, { Request, Response } from "express";
import cors from "cors";
import {Produto, produtos} from "./data"

const app = express();

app.use(express.json());
app.use(cors());

//Exercício 1
app.get("/test",(req:Request, res:Response)=>{
    res.send("test")
})


// Exercício 3

app.post("/novoproduto",(req:Request, res:Response)=>{
    const novoProduto: Produto={
        id: Date.now().toString(),
        name:req.body.name,
        price:req.body.price
    }

    produtos.push(novoProduto)
    // try{
    //     const produtoId = req.headers.authorization
    //     const nomeDoProduto = req.body.name
        // const preco = produtos.price
        // if(!produtoId){
        //     res.statusCode = 404
        //     throw new Error("Informe o authorization.")
        // }
        // for (let i = 0; i < produtos.length; i++)
        //     if (produtos[i].id === produtoId)
        //     produtos[i].novoproduto.push({
        //         id:Date.now().toString(),
        //         name:nomeDoProduto,
        //         price: 
        //     })

//     }catch(err:any) {

//         res.send(err.massage) 
//     }
     res.status(200).send({message: "Produto cadastrado."})
 })

 // Exercício 4

app.get("/todosprodutos",(req:Request, res:Response){
    res.send({produtos})
}) 

//Exercício 5

app.put("/precodoproduto/:id",(req:Request, res:Response){
 
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});