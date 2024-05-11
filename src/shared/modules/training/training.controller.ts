import { inject, injectable } from "inversify";
import { BaseController, HttpMethod } from "../../libs/rest/index.js";
import { Logger } from "../../libs/logger/logger.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultTrainingService } from "./default-training.service.js";
import { CreateTrainingRequest } from "./create-training-request.type.js";
import { fillDTO } from "../../helpers/common.js";
import { Response } from 'express';
import { CreateTrainingRdo } from "./rdo/create-training.rdo.js";

@injectable()
export class TrainingController extends BaseController{
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.TrainingService) private readonly trainingService: DefaultTrainingService,
  ) {
    super(logger);

    this.logger.info('Register routes for TrainingController');

    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create });
  }


  public async create(
    { body }: CreateTrainingRequest,
    res: Response,
  ): Promise<void> {
    const result = await this.trainingService.create(body);
    this.created(res,fillDTO(CreateTrainingRdo, result))
  }

}