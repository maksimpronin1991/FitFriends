import { DocumentType } from "@typegoose/typegoose";
import { PersonalTrainingService } from "./personal-training-service.interface.js";
import { PersonalTrainingEntity, PersonalTrainingModel } from "./personal-training.entity.js";
import { PersonalTrainingDto } from "./dto/personal-training.dto.js";

export class DefaultPersonalTrainingService implements PersonalTrainingService {
  public async create(dto: PersonalTrainingDto): Promise<DocumentType<PersonalTrainingEntity>> {
    const personalTraining = new PersonalTrainingEntity(dto);
    return PersonalTrainingModel.create(personalTraining);
  }

  public async getPersonalTrainingById(id: string): Promise<DocumentType<PersonalTrainingEntity> | null> {
    return PersonalTrainingModel.findById(id);
  }

  public async updatePersonalTraining(id: string, dto: PersonalTrainingDto): Promise<DocumentType<PersonalTrainingEntity> | null> {
    return PersonalTrainingModel.findByIdAndUpdate(id, dto, {new: true});
  }
}