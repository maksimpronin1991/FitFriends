import { DocumentType } from "@typegoose/typegoose";
import { TrainingDto } from "./dto/training.dto.js";
import { TrainingService } from "./training-service.interface.js";
import { TrainingEntity, TrainingModel } from "./training.entity.js";

export class DefaultTrainingService implements TrainingService {
  public async create(dto: TrainingDto): Promise<DocumentType<TrainingEntity>> {
    const training = new TrainingEntity(dto);
    return TrainingModel.create(training);
  }
  public async getTrainingById(id: string): Promise<DocumentType<TrainingEntity> | null> {
    return TrainingModel.findById(id);
  }
  public async getTrainings(id:string): Promise<TrainingEntity[]> {
    return TrainingModel.find({trainer: id});
  }
  public async updateTraining(id: string, dto: TrainingDto): Promise<DocumentType<TrainingEntity> | null> {
    return TrainingModel.findByIdAndUpdate(id, dto, {new: true});
  }
}