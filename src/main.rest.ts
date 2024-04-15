import 'reflect-metadata';
import { Container } from "inversify";
import { RestApplication } from "./rest/index.js";
import { Component } from "./shared/types/index.js";
import { createRestApplicationContainer } from './rest/rest.container.js';
import { createUserContainer } from './shared/modules/user/user.container.js';
import { createUserBalanceContainer } from './shared/modules/user-balance/user-balance.container.js';
import { createTrainingContainer } from './shared/modules/training/training.container.js';
import { createReviewContainer } from './shared/modules/review/review.container.js';
import { createPersonalTrainingContainer } from './shared/modules/personal-training/personal-training.container.js';
import { createOrderContainer } from './shared/modules/order/order.container.js';
import { createNotificationContainer } from './shared/modules/notification/notification.container.js';


async function bootstrap() {
  
  const appContainer = Container.merge(
    createRestApplicationContainer(),
    createUserContainer(),
    createUserBalanceContainer(),
    createTrainingContainer(),
    createReviewContainer(),
    createPersonalTrainingContainer(),
    createOrderContainer(),
    createNotificationContainer(),
  );
  
  const application = appContainer.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();