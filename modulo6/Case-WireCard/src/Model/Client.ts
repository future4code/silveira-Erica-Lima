export class Client {
    constructor(
        private id: string,
        private name: string,
    ){}

    getId = ():string => {
        return this.id
    }
    getName = ():string => {
        return this.name
    }

    static toUserModel(data: any): Client {
        return new Client(data.id, data.name);
      }
}