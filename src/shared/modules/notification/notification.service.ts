import { DocumentType } from '@typegoose/typegoose';
import { NotificationDto } from './dto/notification.dto.js';
import { NotificationService } from './notification-service.interface.js';
import { NotificationEntity, NotificationModel } from './notification.entity.js';

export class DefaultNotificationService implements NotificationService {

  public async create(dto: NotificationDto): Promise<DocumentType<NotificationEntity>> {
    const notification = new NotificationEntity(dto)
    return NotificationModel.create(notification)
  }

  public async getNotificationsById(UserId: string): Promise<DocumentType<NotificationEntity> | null> {
    return NotificationModel.findOne({userId: UserId})
  }

  public async delete(NotificationId: string): Promise<void> {
    await NotificationModel.findByIdAndDelete(NotificationId)
  }
}