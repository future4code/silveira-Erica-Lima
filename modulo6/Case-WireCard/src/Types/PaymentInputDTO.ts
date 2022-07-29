import { STATUS, TYPE } from "../Model/Payment";

export type PaymentInputDTO = {
  amount: number;
  type: TYPE
};
