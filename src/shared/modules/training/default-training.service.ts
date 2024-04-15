import { DocumentType } from "@typegoose/typegoose";
import { TrainingDto } from "./dto/training.dto.js";
import { TrainingService } from "./training-service.interface.js";
import { TrainingEntity, TrainingModel } from "./training.entity.js";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.enum.js";
import { Logger } from "pino";

@injectable()
export class DefaultTrainingService implements TrainingService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
  ) {}
  public async create(dto: TrainingDto): Promise<DocumentType<TrainingEntity>> {
    const training = new TrainingEntity(dto);
    const result = TrainingModel.create(training);
    this.logger.info(`Training ${training.id} created!`);
    return result
  }
  public async getTrainingById(id: string): Promise<DocumentType<TrainingEntity> | null> {
    return TrainingModel.findById(id);
  }
  public async getTrainings(id:string): Promise<TrainingEntity[]> {
    return TrainingModel.find({trainer: id});
  }
  public async updateTraining(id: string, dto: TrainingDto): Promise<DocumentType<TrainingEntity> | null> {
    const result = TrainingModel.findByIdAndUpdate(id, dto, {new: true});
    this.logger.info(`Training ${id} was changed!`);
    return result
  }
}