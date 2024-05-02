import { Training } from "../../types/training.type.js";
import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
export interface TrainingEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'trainings',
    timestamps: true
  }
})
export class TrainingEntity extends defaultClasses.TimeStamps implements Training {
  @prop({required: true, minLength: 1, maxLength: 15, type: () => String})
  title: string; // Min length: 1, Max length: 15
  @prop({required: true, type: () => String })
  backgroundImage: string; // Image in jpg/png format
  @prop({required: true, type: () => String })
  level: 'beginner' | 'amateur' | 'professional';
  @prop({ required: true, type: () => String})
  trainingType: 'йога' | 'бег' | 'бокс' | 'стрейчинг' | 'кроссфит' | 'аэробика' | 'пилатес' ;
  @prop({required: true, type: () => String })
  duration: '10-30 min' | '30-50 min' | '50-80 min' | '80-100 min';
  @prop({ required: true, min: 0, type: () => Number })
  price: number; // >= 0
  @prop({ required: true, min: 1000, max: 5000 , type: () => Number })
  calories: number; // Min: 1000, Max: 5000
  @prop({ required: true, minLength: 10, maxLength: 140, type: () => String })
  description: string; // Min length: 10, Max length: 140
  @prop({required: true, type: () => String })
  gender: 'female' | 'male' | 'all';
  @prop({required: true, type: () => String })
  video: string; // Video format: mov/avi/mp4
  @prop({ required: false,default: 0, type: () => Number })
  rating: number; // Default: 0
  @prop({ required: false, type: () => String })
  trainerId: string;
  @prop({ required: true, default: false, type: () => Boolean })
  specialOffer: boolean;

  constructor(trainingData: Training) {
    super();
    
    this.title = trainingData.title;
    this.backgroundImage = trainingData.backgroundImage;
    this.level = trainingData.level;
    this.trainingType = trainingData.trainingType;
    this.duration = trainingData.duration;
    this.price = trainingData.price;
    this.calories = trainingData.calories;
    this.description = trainingData.description;
    this.gender = trainingData.gender;
    this.video = trainingData.video;
    this.rating = trainingData.rating;
    this.trainerId = trainingData.trainerId;
    this.specialOffer = trainingData.specialOffer;
  }
};

export const TrainingModel = getModelForClass(TrainingEntity);