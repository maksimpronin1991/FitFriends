import { Expose } from "class-transformer";

export class UpdatePersonalTrainingRdo {
  @Expose()
  id: string;

  @Expose()
  requestStatus: 'на рассмотрении' | 'отклонён' | 'принят';
}