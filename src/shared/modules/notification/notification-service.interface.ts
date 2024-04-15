import { DocumentType } from "@typegoose/typegoose";
import { NotificationDto } from "./dto/notification.dto.js";
import { NotificationEntity } from "./notification.entity.js";

export interface NotificationService {
  create(dto: NotificationDto): Promise<DocumentType<NotificationEntity>>;
  getNotificationsById(UserId: string): Promise<DocumentType<NotificationEntity> | null>;
  delete(NotificationId: string): Promise<void>;
}