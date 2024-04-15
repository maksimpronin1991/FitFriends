import { Container } from "inversify";
import { NotificationService } from "./notification-service.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultNotificationService } from "./default-notification.service.js";

export function createNotificationContainer() {
  const notificationContainer = new Container();
  notificationContainer.bind<NotificationService>(Component.NotificationService).to(DefaultNotificationService).inSingletonScope();

  return notificationContainer;
}