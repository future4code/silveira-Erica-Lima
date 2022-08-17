import { Request, Response } from "express";
import ProductBusiness from "../Business/ProductBusiness";
import { ProductInputDTO } from "../Model/Product";

export class ProductController{
    constructor(private ProductBusiness : ProductBusiness) {}
    createProduct = async(req: Request, res: Response) => {
        try {
            const {name, tags} = req.body
            const input: ProductInputDTO = {
                name,
                tags
            }
            const result = await this.ProductBusiness.createProduct(input)
            res.status(201).send({result });
        } catch (error:any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
        }
    }
    getName = async(req: Request, res: Response)=>{
        try {
            const {name} = req.body
            const result = await this.ProductBusiness.getName(name)
            res.status(200).send(result)
        } catch (error:any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
        }
    }
}


export default ProductController

