import { Expose } from 'class-transformer';

export class UserBalanceRdo{
  @Expose()
  public id: string;
  public userId: string;
  public training: string;
  public quantityTraining: number;
}