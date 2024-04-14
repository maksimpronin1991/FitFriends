import { TrainingDto } from "./dto/training.dto.js";
import { TrainingEntity } from "./training.entity.js";

export interface TrainingService{
  create(dto: TrainingDto): Promise<TrainingEntity>;
  getTrainingById(id: string): Promise<TrainingEntity>;
  getTrainings(): Promise<TrainingEntity[]>;
  updateTraining(id: string, dto: TrainingDto): Promise<TrainingEntity>;
}