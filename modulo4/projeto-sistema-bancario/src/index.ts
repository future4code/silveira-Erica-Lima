import express, { Express, Response, Request } from "express";
import cors from "cors";
import { type } from "os";

const app: Express = express();

app.use(express.json());
app.use(cors());

// type Cliente = {
//   nome: string;
//   saldo: number;
//   extrato: number[];
// };

type Create = {
  nome: string;
  dataDeNascimento: number;
  cpf: number;
}
// const clientes:Cliente[]=[
//   {
//     nome: "Gabriel",
//     saldo: 0,
//     extrato : [1,2,34]
//   }
// ]

app.post("/clients/craete", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    let { nome, dataDeNascimento, cpf} = req.body;
    // let {saldo, extrato} = req.body;
    // if(saldo === 0){
    //   return saldo = 0
    // }
    if (!nome || !dataDeNascimento || !cpf) {
      errorCode = 422;
      throw new Error("Preencha a propriedade name.");
    }
    if (isNaN(dataDeNascimento) ) {
      errorCode = 422;
      throw new Error("Precisa ser digitado número.");
    
    let [dia, mes, ano] = dataDeNascimento.split("/");
    ano = Number
    mes = Number
    dia = Number
    let verificando = 2022 - ano >= 18;
    if (verificando === false) {
      errorCode = 422;
      throw new Error("Idade inválida! Você precisa ser maior de idade.");
    }
    
    if (isNaN(cpf) ) {
      errorCode = 422;
      throw new Error("CPF inválido!");
    } if (cpf !== 11 ) {
      errorCode = 422;
      throw new Error("Falta número no cpf! ")
    } else if( cpf === cpf){
      errorCode = 422;
      throw new Error("CPF já cadastrado! ");
    }
    const criando: Create = {
      nome,
      dataDeNascimento,
      cpf,
    };
    res.status(200).send({criando});
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});
