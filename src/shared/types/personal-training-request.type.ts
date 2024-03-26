export type PersonalTrainingRequest = {
  Initiator: string; // Initiator of the training. Constraints: mandatory; existing user in the system with the role "User".
  User: string; // Trainer or another user with whom the training is conducted. Constraints: mandatory; existing user in the system with the role "User" or "Trainer"; cannot be the user who initiated the training.
  DateCreated: Date; // Date the request for personal training was created. Automatically generated.
  DateStatusChanged: Date; // Date of the latest status change.
  RequestStatus: 'under review' | 'rejected' | 'accepted'; // Current status of the request. Constraints: mandatory; one of the options: under review, rejected, accepted.
};