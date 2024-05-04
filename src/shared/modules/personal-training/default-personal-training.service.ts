import { DocumentType, types } from "@typegoose/typegoose";
import { PersonalTrainingService } from "./personal-training-service.interface.js";
import { PersonalTrainingEntity } from "./personal-training.entity.js";
import { PersonalTrainingDto } from "./dto/personal-training.dto.js";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.enum.js";
import { Logger } from "../../libs/logger/logger.interface.js";
import { UpdatePersonalTrainingDto } from "./dto/update-personal-training.dto.js";

@injectable()
export class DefaultPersonalTrainingService implements PersonalTrainingService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.PersonalTrainingModel) private readonly PersonalTrainingModel: types.ModelType<PersonalTrainingEntity>,
  ) {}
  public async create(dto: PersonalTrainingDto): Promise<DocumentType<PersonalTrainingEntity>> {
    const result = await this.PersonalTrainingModel.create(dto);
    this.logger.info(`Personal training for ${dto.user} created!`);
    return result
  }

  public async updatePersonalTraining(id: string, dto: UpdatePersonalTrainingDto): Promise<DocumentType<PersonalTrainingEntity> | null> {
    const result = await this.PersonalTrainingModel.findByIdAndUpdate(id, dto, {new: true});
    this.logger.info(`Personal training ${id} was changed!`);
    return result
  }
}