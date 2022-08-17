import ProductBusiness from "./Business/ProductBusiness";
import { app } from "./Controller/app";
import ProductController from "./Controller/ProductController";
import { ProductData } from "./Data/ProductData";
import { IdGenerator } from "./Services/idGenerator";

const productBusiness = new ProductBusiness(new IdGenerator(), new ProductData())

const productController = new ProductController(productBusiness)

app.post("/product/create", productController.createProduct)

app.get("/product/get", productController.createProduct)



