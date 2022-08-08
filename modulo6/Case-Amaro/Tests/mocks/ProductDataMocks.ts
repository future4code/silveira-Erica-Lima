import { Product } from "../../src/Model/Product"
import { ProductMock } from "./ProductMocks"


export class ProductDataMock {

    public async getProductByName(name: string): Promise<Product | undefined> {
        switch(name) {
            case "Vestido Tubinho":
                return ProductMock
            default: 
                return undefined
        }
    }
    public async getProductByTags(tags: string): Promise<Product | undefined> {
        switch(tags) {
            case "liso, casual, discreto":
                return ProductMock
            default: 
                return undefined
        }
    }
    public async getAllProduct(): Promise<Product[]> {
        return [ProductMock]
    }
}