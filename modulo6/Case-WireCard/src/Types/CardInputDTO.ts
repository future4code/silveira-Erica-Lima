export type CardInputDto = {
  card_holder_name: string;
  card_number: string;

  card_expiration_date: Date;

  card_cvv: string;
  buyer_id: string;
};
