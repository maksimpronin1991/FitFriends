import { PersonalTrainingDto } from "./dto/personal-training.dto.js";
import { PersonalTrainingEntity } from "./personal-training.entity.js";

export interface PersonalTrainingService {
  create(dto: PersonalTrainingDto): Promise<PersonalTrainingEntity>
  getPersonalTrainingById(id: string): Promise<PersonalTrainingEntity>
  updatePersonalTraining(id: string, dto: PersonalTrainingDto): Promise<PersonalTrainingEntity>
}