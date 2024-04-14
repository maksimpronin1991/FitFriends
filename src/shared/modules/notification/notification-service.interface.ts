import { NotificationDto } from "./dto/notification.dto.js";
import { NotificationEntity } from "./notification.entity.js";

export interface NotificationService {
  create(dto: NotificationDto): Promise<NotificationEntity>;
  getNotificationById(UserId: string): Promise<NotificationEntity>;
  delete(NotificationId: string): Promise<void>;
}