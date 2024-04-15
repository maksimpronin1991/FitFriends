import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { PersonalTraining } from '../../types/personal-training.type.js';

export interface PersonalTrainingEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'personalTrainings',
    timestamps: true
  }
})
export class PersonalTrainingEntity extends defaultClasses.TimeStamps implements PersonalTraining {
  @prop({required: true })
  initiator: string; // Initiator of the training. Constraints: mandatory; existing user in the system with the role "User".
  @prop({required: true })
  user: string; // Trainer or another user with whom the training is conducted. Constraints: mandatory; existing user in the system with the role "User" or "Trainer"; cannot be the user who initiated the training.
  @prop({required: true })
  dateStatusChanged: Date; // Date of the latest status change.
  @prop({required: true, default: 'under review' })
  requestStatus: 'under review' | 'rejected' | 'accepted'; // Current status of the request. Constraints: mandatory; one of the options: under review, rejected, accepted.

  constructor(personalTrainingData: PersonalTraining) {
    super();
    
    this.initiator = personalTrainingData.initiator;
    this.user = personalTrainingData.user;
    this.dateStatusChanged = personalTrainingData.dateStatusChanged;
    this.requestStatus = personalTrainingData.requestStatus;
  }
};

export const PersonalTrainingModel = getModelForClass(PersonalTrainingEntity);