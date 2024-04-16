export class PersonalTrainingDto {
  initiator: string;
  user: string;
  dateStatusChanged: string;
  requestStatus: 'under review' | 'rejected' | 'accepted';
}