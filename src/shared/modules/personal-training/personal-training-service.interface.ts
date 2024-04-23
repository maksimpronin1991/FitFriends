import { DocumentType } from "@typegoose/typegoose";
import { PersonalTrainingDto } from "./dto/personal-training.dto.js";
import { PersonalTrainingEntity } from "./personal-training.entity.js";

export interface PersonalTrainingService {
  create(dto: PersonalTrainingDto): Promise<DocumentType<PersonalTrainingEntity>>
  updatePersonalTraining(id: string, dto: PersonalTrainingDto): Promise<DocumentType<PersonalTrainingEntity>  | null>
}