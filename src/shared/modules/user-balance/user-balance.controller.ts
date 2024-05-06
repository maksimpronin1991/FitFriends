import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { BaseController, HttpMethod } from '../../libs/rest/index.js';
import { Logger } from '../../libs/logger/index.js';
import { Component } from '../../types/index.js';
import { UserBalanceService } from './user-balance-service.interface.js';
import { fillDTO } from '../../helpers/common.js';
import { UserBalanceRdo } from './rdo/user-balance.rdo.js';

@injectable()
export class UserBalanceController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.UserBalanceService) private readonly userBalanceService: UserBalanceService
  ) {
    super(logger);

    this.logger.info('Register routes for UserBalanceController...');

    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });
    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create });
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const userBalance = await this.userBalanceService.getUserBalance('661ffa52db68976f5f55c689');
    const avalibleTrainings = userBalance.reduce((sum, user) => user.quantityTraining + sum, 0);


    this.ok(res, avalibleTrainings);
  }



  public create(_req: Request, _res: Response): void {
    // Код обработчика
    const userBalance = this.userBalanceService.getUserBalance('661ffa52db68976f5f55c689');
    const responseData = fillDTO(UserBalanceRdo,userBalance)
  }
}