import { Notification } from "../../types/notification.type.js";

export class NotificationEntity  implements Notification {
  date: Date;
  user: string;
  message: string;
}