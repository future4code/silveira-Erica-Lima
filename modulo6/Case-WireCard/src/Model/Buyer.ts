export class Buyer {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private cpf: string
    ){}

    getId = ():string => {
        return this.id
    }
    getName = ():string => {
        return this.name
    }
    getEmail = ():string => {
        return this.email
    }
    getCpf= ():string => {
        return this.cpf
    }
    static toUserModel(data: any): Buyer {
        return new Buyer(data.id, data.name, data.email, data.cpf);
      }
}