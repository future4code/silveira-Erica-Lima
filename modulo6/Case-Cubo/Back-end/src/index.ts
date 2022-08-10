import CuboBusiness from "./Business/CuboBusiness";
import { app } from "./Controller/app";
import CuboController from "./Controller/CuboController";
import { CuboData } from "./Data/CuboData";
import { IdGenerator } from "./Services/idGenerator";

const cuboBusiness = new CuboBusiness(
    new IdGenerator(),
    new CuboData()
  );
  
  const cuboController = new CuboController(cuboBusiness);

  app.post("/participation/create", cuboController.createCubo);
  app.get("/participation/select", cuboController.selectCubo);
