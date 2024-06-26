import { Container } from "inversify";
import { PersonalTrainingService } from "./personal-training-service.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultPersonalTrainingService } from "./default-personal-training.service.js";
import { types } from "@typegoose/typegoose";
import { PersonalTrainingEntity, PersonalTrainingModel } from "./personal-training.entity.js";
import { Controller } from "../../libs/rest/index.js";
import { PersonalTrainingController } from "./personal-training.controller.js";

export function createPersonalTrainingContainer() {
  const personalTrainingContainer = new Container();
  personalTrainingContainer.bind<PersonalTrainingService>(Component.PersonalTrainingService).to(DefaultPersonalTrainingService).inSingletonScope();
  personalTrainingContainer.bind<types.ModelType<PersonalTrainingEntity>>(Component.PersonalTrainingModel).toConstantValue(PersonalTrainingModel);
  personalTrainingContainer.bind<Controller>(Component.PersonalTrainingController).to(PersonalTrainingController).inSingletonScope();
  return personalTrainingContainer;
}