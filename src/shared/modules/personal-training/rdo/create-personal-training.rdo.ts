import { Expose } from "class-transformer";

export class CreatePersonalTrainingRdo {
  @Expose()
  id: string;

  @Expose()
  initiator: string;

  @Expose()
  user: string;

  @Expose()
  requestStatus: 'на рассмотрении' | 'отклонён' | 'принят';
}