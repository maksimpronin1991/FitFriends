import { Ref, defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { UserEntity } from "../user/user.entity.js";

export interface NotificationEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'notifications',
    timestamps: true
  }
})
export class NotificationEntity extends defaultClasses.TimeStamps{

  @prop({required: false, ref: UserEntity })
  userId: Ref<UserEntity>;
  @prop({required: true, minlength:10, maxlength: 140,type: () => String })
  message: string;

}

export const NotificationModel = getModelForClass(NotificationEntity);