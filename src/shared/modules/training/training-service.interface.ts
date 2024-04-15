import { DocumentType } from "@typegoose/typegoose";
import { TrainingDto } from "./dto/training.dto.js";
import { TrainingEntity } from "./training.entity.js";

export interface TrainingService{
  create(dto: TrainingDto): Promise<DocumentType<TrainingEntity>>;
  getTrainingById(id: string): Promise<DocumentType<TrainingEntity> | null>;
  getTrainings(id:string): Promise<TrainingEntity[]>;
  updateTraining(id: string, dto: TrainingDto): Promise<DocumentType<TrainingEntity> | null>;
}