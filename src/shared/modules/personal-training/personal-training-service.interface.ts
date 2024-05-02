import { DocumentType } from "@typegoose/typegoose";
import { PersonalTrainingDto } from "./dto/personal-training.dto.js";
import { PersonalTrainingEntity } from "./personal-training.entity.js";
import { UpdatePersonalTrainingDto } from "./dto/update-personal-training.dto.js";

export interface PersonalTrainingService {
  create(dto: PersonalTrainingDto): Promise<DocumentType<PersonalTrainingEntity>>
  updatePersonalTraining(id: string, dto: UpdatePersonalTrainingDto): Promise<DocumentType<PersonalTrainingEntity>  | null>
}