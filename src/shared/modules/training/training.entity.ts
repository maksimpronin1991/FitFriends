import { Ref, defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { UserEntity } from "../user/user.entity.js";
export interface TrainingEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'trainings',
    timestamps: true
  }
})
export class TrainingEntity extends defaultClasses.TimeStamps{
  @prop({required: true, minLength: 1, maxLength: 15, type: () => String})
  public title: string; // Min length: 1, Max length: 15
  @prop({required: true, type: () => String })
  public backgroundImage: string; // Image in jpg/png format
  @prop({required: true, type: () => String })
  public level: 'beginner' | 'amateur' | 'professional';
  @prop({ required: true, type: () => String})
  public trainingType: 'йога' | 'бег' | 'бокс' | 'стрейчинг' | 'кроссфит' | 'аэробика' | 'пилатес' ;
  @prop({required: true, type: () => String })
  public duration: '10-30 min' | '30-50 min' | '50-80 min' | '80-100 min';
  @prop({ required: true, min: 0, type: () => Number })
  public price: number; // >= 0
  @prop({ required: true, min: 1000, max: 5000 , type: () => Number })
  public calories: number; // Min: 1000, Max: 5000
  @prop({ required: true, minLength: 10, maxLength: 140, type: () => String })
  public description: string; // Min length: 10, Max length: 140
  @prop({required: true, type: () => String })
  public gender: 'female' | 'male' | 'all';
  @prop({required: true, type: () => String })
  public video: string; // Video format: mov/avi/mp4
  @prop({ required: false,default: 0, type: () => Number })
  public rating: number; // Default: 0
  @prop({ required: false, ref: UserEntity, type: () => String })
  public trainerId: Ref<UserEntity>;
  @prop({ required: true, default: false, type: () => Boolean })
  public specialOffer: boolean;
};

export const TrainingModel = getModelForClass(TrainingEntity);