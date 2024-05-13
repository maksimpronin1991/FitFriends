import { inject, injectable } from "inversify";
import { BaseController, HttpMethod } from "../../libs/rest/index.js";
import { Logger } from "../../libs/logger/logger.interface.js";
import { Component } from "../../types/component.enum.js";
import { fillDTO } from "../../helpers/common.js";
import { Response,Request } from 'express';
import { DefaultPersonalTrainingService } from "./default-personal-training.service.js";
import { CreatePersonalTrainingRdo } from "./rdo/create-personal-training.rdo.js";
import { UpdatePersonalTrainingRdo } from "./rdo/update-personal-training.rdo.js";

@injectable()
export class PersonalTrainingController extends BaseController {

  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.PersonalTrainingService) private readonly personalTrainingService: DefaultPersonalTrainingService,
  ){
    super(logger);
    this.logger.info('Register routes for PersonalTrainingController');

    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create });
    this.addRoute({ path: '/:trainingId', method: HttpMethod.Put, handler: this.updateStatus });
  }

  public async create({ body }: Request, res: Response): Promise<void> {
    const result = await this.personalTrainingService.create(body);
    this.created(res, fillDTO(CreatePersonalTrainingRdo, result));
  }

  public async updateStatus({ params, body }: Request, res: Response): Promise<void> {
    const result = await this.personalTrainingService.updatePersonalTraining(params.trainingId, body);
    this.created(res, fillDTO(UpdatePersonalTrainingRdo, result));
  }

}