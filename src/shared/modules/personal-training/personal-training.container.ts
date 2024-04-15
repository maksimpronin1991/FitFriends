import { Container } from "inversify";
import { PersonalTrainingService } from "./personal-training-service.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultPersonalTrainingService } from "./default-personal-training.service.js";

export function createPersonalTrainingContainer() {
  const personalTrainingContainer = new Container();
  personalTrainingContainer.bind<PersonalTrainingService>(Component.PersonalTrainingService).to(DefaultPersonalTrainingService).inSingletonScope();

  return personalTrainingContainer;
}