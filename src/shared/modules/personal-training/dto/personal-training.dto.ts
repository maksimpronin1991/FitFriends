export class PersonalTrainingDto {
  initiator: string;
  user: string;
  dateStatusChanged: Date;
  requestStatus: 'under review' | 'rejected' | 'accepted';
}