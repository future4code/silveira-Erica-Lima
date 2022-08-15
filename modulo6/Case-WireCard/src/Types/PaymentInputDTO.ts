import { STATUS, TYPE } from "../Model/Payment";

export type PaymentInputDTO = {
  amount: number;
  type: TYPE;
  status?: STATUS;
  buyer_id: string;
  card_id: string;
  client_id: string;

};
