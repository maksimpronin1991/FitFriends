import { Ref, defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { TrainingEntity } from "../training/training.entity.js";

export interface UserBalanceEntity extends defaultClasses.Base {}

@modelOptions({ 
  schemaOptions: { 
    collection: "user-balance", 
    timestamps: true,
  } 
})
export class UserBalanceEntity extends defaultClasses.TimeStamps{
  @prop({ required: false , type: () => String})
  public userId: string

  @prop({ required: false , ref: TrainingEntity})
  public training: Ref<TrainingEntity>;

  @prop({ required: false , type: () => Number})
  public quantityTraining: number;
}

export const UserBalanceModel = getModelForClass(UserBalanceEntity);