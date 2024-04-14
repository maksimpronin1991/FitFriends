import { Container } from "inversify";
import { UserBalanceService } from "./user-balance.service.js";
import { Component } from "../../types/component.enum.js";
import { types } from "@typegoose/typegoose";
import { UserBalanceEntity, UserBalanceModel } from "./user-balance.entity.js";

export function createUserBalanceContainer() {
  const userBalanceContainer = new Container();

  userBalanceContainer.bind<UserBalanceService>(Component.UserBalanceService).to(UserBalanceService).inSingletonScope();
  userBalanceContainer.bind<types.ModelType<UserBalanceEntity>>(Component.UserBalanceModel).toConstantValue(UserBalanceModel);

  return userBalanceContainer;
}