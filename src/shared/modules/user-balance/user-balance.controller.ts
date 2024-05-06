import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { BaseController, HttpMethod } from '../../libs/rest/index.js';
import { Logger } from '../../libs/logger/index.js';
import { Component } from '../../types/index.js';
import { UserBalanceService } from './user-balance-service.interface.js';
import { fillDTO } from '../../helpers/common.js';
import { UserBalanceRdo } from './rdo/user-balance.rdo.js';
import { UserBalanceDto } from './dto/user-balance.dto.js';
import { UpdateUserBalanceDto } from './dto/update-user-balance.dto.js';

@injectable()
export class UserBalanceController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.UserBalanceService) private readonly userBalanceService: UserBalanceService
  ) {
    super(logger);

    this.logger.info('Register routes for UserBalanceController...');

    this.addRoute({ path: '/:userId', method: HttpMethod.Get, handler: this.index });
    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create });
    this.addRoute({ path: '/:userBalanceId', method: HttpMethod.Put, handler: this.update });
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const userBalance = await this.userBalanceService.getUserBalance(_req.params.userId);
    const avalibleTrainings = userBalance.reduce((sum, user) => user.quantityTraining + sum, 0);

    this.ok(res, avalibleTrainings);
  }



  public async create(
    { body }: Request<Record<string, unknown>, Record<string, unknown>, UserBalanceDto>,
    res: Response
  ): Promise<void> {
    const result = await this.userBalanceService.create(body);

    this.created(res, fillDTO(UserBalanceRdo, result));
  }


  public async update(
    { params, body }: Request<Record<string, unknown>, Record<string, unknown>, UpdateUserBalanceDto>,
    res: Response
  ): Promise<void> {
    const userBalanceId = params.userBalanceId as string;
    const result = await this.userBalanceService.update(userBalanceId, body);

    this.ok(res, fillDTO(UserBalanceRdo, result));
  }
}