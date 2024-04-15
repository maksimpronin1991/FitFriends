import { DocumentType, types } from '@typegoose/typegoose';
import { NotificationDto } from './dto/notification.dto.js';
import { NotificationService } from './notification-service.interface.js';
import { NotificationEntity } from './notification.entity.js';
import { inject, injectable } from 'inversify';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/logger.interface.js';

@injectable()
export class DefaultNotificationService implements NotificationService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.NotificationModel) private readonly NotificationModel: types.ModelType<NotificationEntity>,
  ) {}

  public async create(dto: NotificationDto): Promise<DocumentType<NotificationEntity>> {
    const notification = new NotificationEntity(dto)

    const result = await this.NotificationModel.create(notification)
    this.logger.info(`Notification ${notification.id} created!`)

    return result
  }

  public async getNotificationsById(UserId: string): Promise<DocumentType<NotificationEntity> | null> {
    return this.NotificationModel.findOne({userId: UserId})
  }

  public async delete(NotificationId: string): Promise<void> {

    await this.NotificationModel.findByIdAndDelete(NotificationId)
    this.logger.info(`Notification ${NotificationId} deleted!`)
  }
}