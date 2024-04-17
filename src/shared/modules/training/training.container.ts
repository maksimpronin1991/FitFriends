import { Container } from "inversify";
import { TrainingService } from "./training-service.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultTrainingService } from "./default-training.service.js";
import { TrainingEntity, TrainingModel } from "./training.entity.js";
import { types } from "@typegoose/typegoose";

export function createTrainingContainer() {
  const trainingContainer = new Container();
  trainingContainer.bind<TrainingService>(Component.TrainingService).to(DefaultTrainingService).inSingletonScope();
  trainingContainer.bind<types.ModelType<TrainingEntity>>(Component.TrainingModel).toConstantValue(TrainingModel);
  return trainingContainer;
}