import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Notification } from "../../types/notification.type.js";

export interface UserEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'trainings',
    timestamps: true
  }
})
export class NotificationEntity extends defaultClasses.TimeStamps  implements Notification {

  @prop({required: false })
  user: string;
  @prop({required: true, minlength:10, maxlength: 140 })
  message: string;

  constructor(notificationData: Notification) {
    super();
    
    this.user = notificationData.user;
    this.message = notificationData.message;
  }
}

export const UserModel = getModelForClass(NotificationEntity);