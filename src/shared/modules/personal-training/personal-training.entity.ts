import { Ref, defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';

export interface PersonalTrainingEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'personalTrainings',
    timestamps: true
  }
})
export class PersonalTrainingEntity extends defaultClasses.TimeStamps{
  @prop({ required: true , ref: UserEntity })
  initiator: Ref<UserEntity>; // Initiator of the training. Constraints: mandatory; existing user in the system with the role "User".
  @prop({ required: true , ref: UserEntity })
  user: Ref<UserEntity>; // Trainer or another user with whom the training is conducted. Constraints: mandatory; existing user in the system with the role "User" or "Trainer"; cannot be the user who initiated the training.
  @prop({ required: true , type: () => String , default: 'на рассмотрении' })
  requestStatus: 'на рассмотрении' | 'отклонён' | 'принят';

};

export const PersonalTrainingModel = getModelForClass(PersonalTrainingEntity);