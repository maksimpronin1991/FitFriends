import { Container } from "inversify";
import { DefaultUserBalanceService } from "./default-user-balance.service.js";
import { Component } from "../../types/component.enum.js";
import { types } from "@typegoose/typegoose";
import { UserBalanceEntity, UserBalanceModel } from "./user-balance.entity.js";
import { UserBalanceService } from "./user-balance-service.interface.js";
import { Controller } from "../../libs/rest/index.js";
import { UserBalanceController } from "./user-balance.controller.js";

export function createUserBalanceContainer() {
  const userBalanceContainer = new Container();

  userBalanceContainer.bind<UserBalanceService>(Component.UserBalanceService).to(DefaultUserBalanceService).inSingletonScope();
  userBalanceContainer.bind<types.ModelType<UserBalanceEntity>>(Component.UserBalanceModel).toConstantValue(UserBalanceModel);
  userBalanceContainer.bind<Controller>(Component.UserBalanceController).to(UserBalanceController).inSingletonScope();
  return userBalanceContainer;
}