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
  @prop({ required: true , type: () => String })
  initiator: string; // Initiator of the training. Constraints: mandatory; existing user in the system with the role "User".
  @prop({ required: true , type: () => String })
  user: string; // Trainer or another user with whom the training is conducted. Constraints: mandatory; existing user in the system with the role "User" or "Trainer"; cannot be the user who initiated the training.
  @prop({ required: true , type: () => String , default: 'на рассмотрении' })
  requestStatus: 'на рассмотрении' | 'отклонён' | 'принят';

  constructor(personalTrainingData: PersonalTraining) {
    super();
    
    this.initiator = personalTrainingData.initiator;
    this.user = personalTrainingData.user;
    this.requestStatus = personalTrainingData.requestStatus;
  }
};

export const PersonalTrainingModel = getModelForClass(PersonalTrainingEntity);