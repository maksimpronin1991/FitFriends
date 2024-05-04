import { Ref, defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { UserEntity } from "../user/user.entity.js";
import { TrainingEntity } from "../training/training.entity.js";
export interface ReviewEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'reviews',
    timestamps: true
  }
})
export class ReviewEntity extends defaultClasses.TimeStamps{
  @prop({required: false, ref: UserEntity })
  public author: Ref<UserEntity>; // Existing user with role 'User'

  @prop({required: false, ref: TrainingEntity })
  public trainingId: Ref<TrainingEntity>; // Existing training

  @prop({required: false, min: 1, max: 5, type: () => Number })
  public rating: number; // Number between 1 and 5 (inclusive)

  @prop({required: true, minlength: 20, maxlength: 1024, type: () => String })
  public text: string; // Min length: 100, Max length: 1024

};

export const ReviewModel = getModelForClass(ReviewEntity);