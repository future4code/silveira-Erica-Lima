import { STATUS, TYPE } from "../Model/Payment";

export type PaymentInputDTO = {

  amount: number;
  type: TYPE;
  status: STATUS;
  client_id: string;
  buyer_id: string;
};
