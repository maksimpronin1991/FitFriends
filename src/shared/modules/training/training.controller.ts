import { inject, injectable } from "inversify";
import { BaseController, HttpMethod } from "../../libs/rest/index.js";
import { Logger } from "../../libs/logger/logger.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultTrainingService } from "./default-training.service.js";
import { CreateTrainingRequest } from "./create-training-request.type.js";
import { fillDTO } from "../../helpers/common.js";
import { Response, Request } from 'express';
import { CreateTrainingRdo } from "./rdo/create-training.rdo.js";

@injectable()
export class TrainingController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.TrainingService) private readonly trainingService: DefaultTrainingService,
  ) {
    super(logger);

    this.logger.info('Register routes for TrainingController');

    this.addRoute({ path: '/create', method: HttpMethod.Post, handler: this.create });
    this.addRoute({ path: '/:trainingId', method: HttpMethod.Get, handler: this.getTraining });
    this.addRoute({ path: '/by-trainer/:trainerId', method: HttpMethod.Get, handler: this.getTrainerTrainings });
    this.addRoute({ path: '/:trainingId', method: HttpMethod.Put, handler: this.updateTraining });
  }


  public async create(
    { body }: CreateTrainingRequest,
    res: Response,
  ): Promise<void> {
    const result = await this.trainingService.create(body);
    this.created(res, fillDTO(CreateTrainingRdo, result))
  }

  public async updateTraining(
    { params, body }: Request,
    res:Response
  ){
    const training = await this.trainingService.updateTraining(params.trainingId, body);

    this.ok(res, training);
  }

  public async getTraining(
    { params }: Request,
    res: Response
  ){
    const training = await this.trainingService.getTrainingById(params.trainingId);
    this.ok(res, fillDTO(CreateTrainingRdo, training));
  }

  public async getTrainerTrainings(
    { params }: Request,
    res: Response
  ){
    const trainings = await this.trainingService.getTrainerTrainings(params.trainerId);
    this.ok(res, trainings);
  }
}