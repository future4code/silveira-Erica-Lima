export class Product {
    constructor(
        private id: string,
        private name: string,
        private tags: string
    ){}

    getId = ():string => {
        return this.id
    }
    getName = ():string => {
        return this.name
    }
    getTags = ():string=> {
        return this.tags
    }
    
    static toUserModel(data: any): Product {
        return new Product(data.id, data.name, data.tags);
      }
}

      
export interface ProductInputDTO {
    name: string,
    tags: string
}