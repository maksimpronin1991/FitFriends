import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Notification } from "../../types/notification.type.js";

export interface NotificationEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'notifications',
    timestamps: true
  }
})
export class NotificationEntity extends defaultClasses.TimeStamps  implements Notification {

  @prop({required: false,type: () => String})
  userId: string;
  @prop({required: true, minlength:10, maxlength: 140,type: () => String })
  message: string;

  constructor(notificationData: Notification) {
    super();
    
    this.userId = notificationData.userId;
    this.message = notificationData.message;
  }
}

export const NotificationModel = getModelForClass(NotificationEntity);