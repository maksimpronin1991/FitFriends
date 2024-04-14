import { TrainingType } from "../../types/user.type.js";
import { Training } from "../../types/training.type.js";
import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
export interface UserEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'trainings',
    timestamps: true
  }
})
export class TrainingEntity extends defaultClasses.TimeStamps implements Training {
  @prop({required: true, minLength: 1, maxLength: 15})
  title: string; // Min length: 1, Max length: 15
  @prop({required: true })
  backgroundImage: string; // Image in jpg/png format
  @prop({required: true })
  level: 'beginner' | 'amateur' | 'professional';
  @prop({ required: true, type: () => [String], enum: ['йога', 'бег', 'бокс', 'стрейчинг', 'кроссфит', 'аэробика', 'пилатес'], validate: {
    validator: (value: TrainingType[]) => value.length < 1,
    message: 'You must select just 1 training types',
  } })
  trainingType: TrainingType[];
  @prop({required: true })
  duration: '10-30 min' | '30-50 min' | '50-80 min' | '80-100 min';
  @prop({ required: true, min: 0 })
  price: number; // >= 0
  @prop({ required: true, min: 1000, max: 5000 })
  calories: number; // Min: 1000, Max: 5000
  @prop({ required: true, minLength: 10, maxLength: 140 })
  description: string; // Min length: 10, Max length: 140
  @prop({required: true })
  gender: 'female' | 'male' | 'all';
  @prop({required: true })
  video: string; // Video format: mov/avi/mp4
  @prop({ required: false,default: 0 })
  rating: number; // Default: 0
  @prop({ required: false })
  trainer: string;
  @prop({ required: true, default: false })
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
    this.trainer = trainingData.trainer;
    this.specialOffer = trainingData.specialOffer;
  }
};

export const TrainingModel = getModelForClass(TrainingEntity);