export class PersonalTrainingDto {
  initiator: string;
  user: string;
  requestStatus: 'на рассмотрении' | 'отклонён' | 'принят';
}