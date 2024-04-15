import { Container } from "inversify";
import { TrainingService } from "./training-service.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultTrainingService } from "./default-training.service.js";

export function createTrainingContainer() {
  const trainingContainer = new Container();
  trainingContainer.bind<TrainingService>(Component.TrainingService).to(DefaultTrainingService).inSingletonScope();
  return trainingContainer;
}