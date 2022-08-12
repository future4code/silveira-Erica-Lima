import { CuboModel } from "../../src/Model/CuboModel"
import { CuboMock } from "./CuboMocks"


export class CuboDataMock {

    public async getCuboByFirstName(first_name: string): Promise<CuboModel | undefined> {
        switch(first_name) {
            case "Erica":
                return CuboMock
            default: 
                return undefined
        }
    }
    public async getCuboByLasterName(laster_name: string): Promise<CuboModel  | undefined> {
        switch(laster_name) {
            case "Inacia":
                return CuboMock
            default: 
                return undefined
        }
    }
    public async getCuboByParticipation(participation: number): Promise<CuboModel  | undefined> {
        switch(participation) {
            case 25:
                return CuboMock
            default: 
                return undefined
        }
    }
    public async getAllCubo(): Promise<CuboModel []> {
        return [CuboMock]
    }
}