import CuboBusiness from "../src/Business/CuboBusiness";
import { CuboData } from "../src/Data/CuboData";
import { CuboInputDTO } from "../src/Model/CuboModel";
import { IdGeneratorMock } from "./mocks/idGeneratorMocks";
import { CuboDataMock } from "./mocks/CuboDataMocks";

const cuboBusinessMock = new CuboBusiness(
    new IdGeneratorMock(),
    new CuboDataMock() as unknown as CuboData
)
const cubo1: CuboInputDTO = {
    first_name:  "",
  laster_name: "Inacia",
  participation:25,
    
   }
   const cubo2: CuboInputDTO = {
    first_name:  "Erica",
  laster_name: "",
  participation:25,
    
   }
   const cubo3: CuboInputDTO = {
    first_name:  "Erica",
  laster_name: "Inacia",
  participation: 0,
    
   }


describe("Test o create product", () => {
    test("Should return error when  ' first_name' is empty", async () =>{
        try {
            await cuboBusinessMock.createCubo(cubo1)} catch(error: any) {
            expect(error.message).toEqual("Missing input")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })
    test("Should return error when  ' laster_name' is empty", async () =>{
        try {
            await cuboBusinessMock.createCubo(cubo2)} catch(error: any) {
                expect(error.message).toEqual("Missing input")
                expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })
    test("Should return error when  ' participation' is empty", async () =>{
        try {
            await cuboBusinessMock.createCubo(cubo3 )} catch(error: any) {
                expect(error.message).toEqual("Missing input")
                expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })
})