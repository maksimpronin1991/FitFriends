export type PersonalTrainingRequest = {
  initiator: string; // Initiator of the training. Constraints: mandatory; existing user in the system with the role "User".
  user: string; // Trainer or another user with whom the training is conducted. Constraints: mandatory; existing user in the system with the role "User" or "Trainer"; cannot be the user who initiated the training.
  dateCreated: Date; // Date the request for personal training was created. Automatically generated.
  dateStatusChanged: Date; // Date of the latest status change.
  requestStatus: 'under review' | 'rejected' | 'accepted'; // Current status of the request. Constraints: mandatory; one of the options: under review, rejected, accepted.
};