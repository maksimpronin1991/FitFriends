import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Review } from "../../types/review.type.js";
export interface ReviewEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'reviews',
    timestamps: true
  }
})
export class ReviewEntity extends defaultClasses.TimeStamps implements Review{
  @prop({required: false, type: () => String })
  author: string; // Existing user with role 'User'
  @prop({required: false, type: () => String })
  trainingId: string; // Existing training
  @prop({required: false, min: 1, max: 5, type: () => Number })
  rating: number; // Number between 1 and 5 (inclusive)
  @prop({required: true, minlength: 100, maxlength: 1024, type: () => String })
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