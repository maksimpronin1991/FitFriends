import { DocumentType } from "@typegoose/typegoose";
import { PersonalTrainingService } from "./personal-training-service.interface.js";
import { PersonalTrainingEntity, PersonalTrainingModel } from "./personal-training.entity.js";
import { PersonalTrainingDto } from "./dto/personal-training.dto.js";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.enum.js";
import { Logger } from "../../libs/logger/logger.interface.js";

@injectable()
export class DefaultPersonalTrainingService implements PersonalTrainingService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
  ) {}
  public async create(dto: PersonalTrainingDto): Promise<DocumentType<PersonalTrainingEntity>> {
    const personalTraining = new PersonalTrainingEntity(dto);

    const result = await PersonalTrainingModel.create(personalTraining);
    this.logger.info(`Personal training ${personalTraining.id} created!`);
    return result
  }

  public async getPersonalTrainingById(id: string): Promise<DocumentType<PersonalTrainingEntity> | null> {
    return PersonalTrainingModel.findById(id);
  }

  public async updatePersonalTraining(id: string, dto: PersonalTrainingDto): Promise<DocumentType<PersonalTrainingEntity> | null> {
    const result = await PersonalTrainingModel.findByIdAndUpdate(id, dto, {new: true});
    this.logger.info(`Personal training ${id} was changed!`);
    return result
  }
}