import { DocumentType, types } from "@typegoose/typegoose";
import { TrainingDto } from "./dto/training.dto.js";
import { TrainingService } from "./training-service.interface.js";
import { TrainingEntity } from "./training.entity.js";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.enum.js";
import { Logger } from '../../libs/logger/logger.interface.js';
import { UpdateTrainingDto } from "./dto/update-training.dto.js";
@injectable()
export class DefaultTrainingService implements TrainingService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.TrainingModel) private readonly TrainingModel: types.ModelType<TrainingEntity>,
  ) {}
  public async create(dto: TrainingDto): Promise<DocumentType<TrainingEntity>> {
    const training = new TrainingEntity(dto);
    const result = this.TrainingModel.create(training);
    this.logger.info(`Training ${training.id} created!`);
    return result
  }

  public async updateTraining(id: string, dto: UpdateTrainingDto): Promise<DocumentType<TrainingEntity> | null> {
    const result = this.TrainingModel.findByIdAndUpdate(id, dto, {new: true});
    this.logger.info(`Training ${id} was changed!`);
    return result
  }

  public async getTrainingById(id: string): Promise<DocumentType<TrainingEntity> | null> {
    return this.TrainingModel.findById(id);
  }

  public async getTrainerTrainings(id:string): Promise<TrainingEntity[]> {
    return this.TrainingModel.find({trainer: id});
  }





}