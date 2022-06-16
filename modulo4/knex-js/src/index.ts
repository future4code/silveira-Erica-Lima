import express, { Express } from "express";
import { Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(cors());
export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

//Exercício 1

//a. raw deixar ver como é no banco MySQL


//b.
const buscarNome = async (name:string): Promise<any> => {
    
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result [0] [0]
}
//c.
const quantidadeActor = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      
    const count = result[0][0].count;
    return count;
  };


//Exercício 2
//a.

const updateActor = async ( id: string,salary: number, ): Promise<void> => {
    await connection
      .update({
        salary: salary,
        
      })
      .where("id", id);
  };


//b.
const deleteActor = async ( id: string): Promise<void> => {
    await connection
      .delete()
      .where("id", id);
  };


//c.
const avgActor = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
    .avg("salary as average")
      .where({ gender });
      return result[0].average;
  };


  //Exercício 3

  //a, b e c
  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await (req.query.gender as string);

      res.status(200).send({
        quantity: count,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });


 //Exercício 4

 //a.

 app.put("/actor", async (req: Request, res: Response) => {
  try {
    const update = await (req.body.id, req.body.salary);
    res.status(200).send({ update
    });
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

 //b.

 app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
   const deletando = await (req.params.id);
   res.status(200).send(deletando)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
