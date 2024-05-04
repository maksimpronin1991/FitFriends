import { DocumentType, types } from '@typegoose/typegoose';
import { NotificationDto } from './dto/notification.dto.js';
import { NotificationService } from './notification-service.interface.js';
import { NotificationEntity } from './notification.entity.js';
import { inject, injectable } from 'inversify';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { DEFAULT_NOTIFICATION_COUNT } from './notification.constant.js';

@injectable()
export class DefaultNotificationService implements NotificationService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.NotificationModel) private readonly NotificationModel: types.ModelType<NotificationEntity>,
  ) {}

  public async create(dto: NotificationDto): Promise<DocumentType<NotificationEntity>> {
    const result = await this.NotificationModel.create(dto)
    this.logger.info(`Notification for ${dto.userId} created!`)

    return result
  }

  public async getNotificationsById(userId: string,count?: number): Promise<NotificationEntity[]> {
    const limit = count ?? DEFAULT_NOTIFICATION_COUNT
    return this.NotificationModel
      .find({userId: userId},{},{limit})
      .exec();
  }

  public async delete(NotificationId: string): Promise<void> {

    await this.NotificationModel
      .findByIdAndDelete(NotificationId)
      .exec();
    this.logger.info(`Notification ${NotificationId} deleted!`)
  }
}