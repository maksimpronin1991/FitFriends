import 'reflect-metadata';
import { Container } from "inversify";
import { RestApplication } from "./rest/index.js";
import { Component } from "./shared/types/index.js";
import { createRestApplicationContainer } from './rest/rest.container.js';
import { createUserContainer } from './shared/modules/user/user.container.js';
import { createUserBalanceContainer } from './shared/modules/user-balance/user-balance.container.js';


async function bootstrap() {
  
  const appContainer = Container.merge(
    createRestApplicationContainer(),
    createUserContainer(),
    createUserBalanceContainer()
  );
  
  const application = appContainer.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();