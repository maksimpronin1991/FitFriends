import { DocumentType } from "@typegoose/typegoose";
import { CreateTrainingDto } from "./dto/create-training.dto.js";
import { TrainingEntity } from "./training.entity.js";
import { UpdateTrainingDto } from "./dto/update-training.dto.js";

export interface TrainingService{
  create(dto: CreateTrainingDto): Promise<DocumentType<TrainingEntity>>;
  getTrainingById(id: string): Promise<DocumentType<TrainingEntity> | null>;
  getTrainerTrainings(trainerId:string): Promise<TrainingEntity[]>
  updateTraining(id: string, dto: UpdateTrainingDto): Promise<DocumentType<TrainingEntity> | null>;
}