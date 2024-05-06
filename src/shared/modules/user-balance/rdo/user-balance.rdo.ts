import { Expose } from 'class-transformer';

export class UserBalanceRdo{
  @Expose()
  public id: string;
  @Expose()
  public userId: string;
  @Expose()
  public training: string;
  @Expose()
  public quantityTraining: number;
}