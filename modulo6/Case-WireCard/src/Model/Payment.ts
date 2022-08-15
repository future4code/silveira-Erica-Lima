export enum TYPE {
    BOLETO = "BOLETO",
    CARD = "CARD"
}

export enum STATUS {
    PAGAR = "PAGAR",
    PAGO = "PAGO"
}

export class Payment{
    constructor(
        private id: string,
        private amount: number,
        private type: TYPE,
        private status: STATUS,
        private buyer_id: string,
        private card_id: string,
        private client_id: string,
    ){}

    getId = ():string => {
        return this.id
    }
    getAmount = ():number => {
        return this.amount
    }
    getType = ():TYPE => {
        return this.type
    }
    getStatus= ():STATUS=> {
        return this.status
    }
    getBuyerId = ():string => {
        return this.buyer_id
    }
    getCarId= ():string => {
        return this.card_id
    }
    getClientId= ():string => {
        return this.client_id
    }
    static toUserModel(data: any): Payment {
        return new Payment(data.id, data.amount, data.type, data.status, data.buyer_id, data.card_id, data.client_id);
      }
}