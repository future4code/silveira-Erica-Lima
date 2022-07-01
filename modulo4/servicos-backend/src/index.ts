import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getCep } from "./endpoints/getCep";
import { postAddressUser } from "./endpoints/postAddressUser";


const app: Express = express();
app.use(express.json());
app.use(cors());


app.get("/address/:cep", getCep)

app.post("/user/address/:cep", postAddressUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
