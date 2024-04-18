export type PersonalTraining = {
  initiator: string; // Initiator of the training. Constraints: mandatory; existing user in the system with the role "User".
  user: string; // Trainer or another user with whom the training is conducted. Constraints: mandatory; existing user in the system with the role "User" or "Trainer"; cannot be the user who initiated the training.
  requestStatus: 'на рассмотрении' | 'отклонён' | 'принят';
}