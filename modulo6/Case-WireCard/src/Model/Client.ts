export class Client {
    constructor(
        private id: string
    ){}

    getId = ():string => {
        return this.id
    }

    static toUserModel(data: any): Client {
        return new Client(data.id);
      }
}