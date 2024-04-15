import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Review } from "../../types/review.type.js";
export interface ReviewEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'trainings',
    timestamps: true
  }
})
export class ReviewEntity extends defaultClasses.TimeStamps implements Review{
  @prop({required: false })
  author: string; // Existing user with role 'User'
  @prop({required: false })
  trainingId: string; // Existing training
  @prop({required: false, min: 1, max: 5 })
  rating: number; // Number between 1 and 5 (inclusive)
  @prop({required: true, min: 100, max: 1024 })
  text: string; // Min length: 100, Max length: 1024

  constructor(reviewData: Review) {
    super();
    
    this.author = reviewData.author;
    this.trainingId = reviewData.trainingId;
    this.rating = reviewData.rating;
    this.text = reviewData.text;
  }
};

export const ReviewModel = getModelForClass(ReviewEntity);