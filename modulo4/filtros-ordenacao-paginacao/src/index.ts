import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import {  getAllUsersName } from './endpoints/getAllUsers';
import { getAllUsersType } from './endpoints/getAllUsersType';
const app: Express = express();

app.use(express.json());
app.use(cors());



// Exercício 1
//a.
app.get("/name",  getAllUsersName)

//b.
app.get("/type",getAllUsersType )

// Exercício 2































































const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});