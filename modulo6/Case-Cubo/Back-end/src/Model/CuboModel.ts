export class CuboModel {
  constructor(
    private id: string,
    private first_name: string,
    private laster_name: string,
    private participation: number
  ) {}

  getId = (): string => {
    return this.id;
  };
  getFirstName = (): string => {
    return this.first_name;
  };
  getLasterName = (): string => {
    return this.laster_name;
  };
  getParticipation = (): number => {
    return this.participation;
  };
  static toUserModel(data: any): CuboModel {
    return new CuboModel(
      data.id,
      data.first_name,
      data.laster_name,
      data.participation
    );
  }
}

export interface CuboInputDTO {
  first_name: string;
  laster_name: string;
  participation: number;
}
