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
import { PaymentBusiness } from "./Business/PaymentBusiness";
import { PaymentData } from "./Data/PaymentData";
import { CardData } from "./Data/CardData";
import { PaymentController } from "./Controller/PaymentController";
import { CardBusiness } from "./Business/CardBusiness";
import { CardController } from "./Controller/CardController";


const clientBusiness = new ClientBusiness(new ClientData(),   new IdGenerator());


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

const paymentBusiness = new PaymentBusiness(
  new HashGenerator(),
  new IdGenerator(),
  new TokenGenerator(),
  new PaymentData(),
  new BuyerData(),
  new ClientData(),
  new CardData()
);
const paymentController = new PaymentController(paymentBusiness);
app.post("/payment", paymentController.payment);


const cardBusiness = new CardBusiness(
  new HashGenerator(),
  new IdGenerator(),
  new TokenGenerator(),
  new CardData(),
  new BuyerData()
);
=
const cardController = new CardController(cardBusiness);
app.post("/card", cardController.card);

const cardController = new CardController(cardBusiness);
app.post("/card", cardController.card);


app.get("/buyer/:id", buyerController.getBuyerId)

const paymentBusiness = new PaymentBusiness(
  new IdGenerator(),
  new PaymentData()
  
);
const cardBusiness = new CardBusiness(

  new IdGenerator(),
  new CardData(),
  new BuyerData()

);
const paymentController = new PaymentController(paymentBusiness, cardBusiness);
app.post("/payment", paymentController.payment);
app.get("/payment/:id", paymentController.getPaymentId)




const cardController = new CardController(cardBusiness);
app.post("/card", cardController.card);



