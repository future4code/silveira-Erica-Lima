import { BuyerBusiness } from "./Business/BuyerBusiness";
import { ClientBusiness } from "./Business/ClientBusiness";
import { BuyerData } from "./Data/BuyerData";
import { ClientData } from "./Data/ClientData";
import { HashGenerator } from "./Services/hashGenerator";
import { IdGenerator } from "./Services/idGenerator";
import { TokenGenerator } from "./Services/tokenGenerator";

import { app } from "./Controller/app";
import { BuyerController } from "./Controller/BuyerController";
import { ClientController } from "./Controller/ClientController";

const clientBusiness = new ClientBusiness(new ClientData());

const clientController = new ClientController(clientBusiness);

app.post("/client", clientController.client);

const buyerBusiness = new BuyerBusiness(
  new HashGenerator(),
  new IdGenerator(),
  new TokenGenerator(),
  new BuyerData()
);
const buyerController = new BuyerController(buyerBusiness);
app.post("/buyer", buyerController.buyer);
