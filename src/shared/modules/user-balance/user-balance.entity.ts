import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { UserBalance } from "../../types/user-balance.type.js";

export interface UserBalanceEntity extends defaultClasses.Base {}

@modelOptions({ 
  schemaOptions: { 
    collection: "user-balance" 
  } 
})
export class UserBalanceEntity extends defaultClasses.TimeStamps implements UserBalance{
  @prop({ required: false , type: () => Number})
  training: number;
  @prop({ required: false , type: () => Number})
  quantityTraining: number;
}

export const UserBalanceModel =getModelForClass(UserBalanceEntity);