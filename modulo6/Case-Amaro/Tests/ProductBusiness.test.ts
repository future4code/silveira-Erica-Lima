import ProductBusiness from "../src/Business/ProductBusiness";
import { ProductData } from "../src/Data/ProductData";
import { ProductInputDTO } from "../src/Model/Product";
import { IdGeneratorMock } from "./mocks/idGeneratorMocks";
import { ProductDataMock } from "./mocks/ProductDataMocks";

const productBusinessMock = new ProductBusiness(
    new IdGeneratorMock(),
    new ProductDataMock() as unknown as ProductData
)
const product: ProductInputDTO = {
    name: "",
    tags: "liso, casual, discreto"
   }
   const product2: ProductInputDTO = {
    name:"Vestido Tubinho",
    tags: ""
   }


describe("Test o create product", () => {
    test("Dever retornar erro quando o nome do produto está vazio", async () =>{
        try {
            await productBusinessMock.createProduct(product)} catch(error: any) {
            expect(error.message).toEqual("Missing input")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })
    test("Dever retornar erro quando a tag do produto está vazio", async () =>{
        try {
            await productBusinessMock.createProduct(product2)} catch(error: any) {
            expect(error.message).toEqual("Missing input")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })
    test("Dever retornar erro quando o nome do produto em busca está vazio", async () =>{
        try {
            await productBusinessMock.getName("")} catch(error: any) {
            expect(error.message).toEqual("Missing input")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })
})