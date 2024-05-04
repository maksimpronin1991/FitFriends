import { inject, injectable } from "inversify";
import {  UserBalanceService } from "./user-balance-service.interface.js";
import { Logger } from "../../libs/logger/logger.interface.js";
import { Component } from "../../types/component.enum.js";
import { DocumentType, types } from "@typegoose/typegoose";
import { UserBalanceEntity } from "./user-balance.entity.js";
import { UserBalanceDto } from "./dto/user-balance.dto.js";
import { UpdateUserBalanceDto } from "./dto/update-user-balance.dto.js";

@injectable()
export class DefaultUserBalanceService implements UserBalanceService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.UserBalanceModel) private readonly userBalanceModel: types.ModelType<UserBalanceEntity>,
  ) { }

  public async create(dto: UserBalanceDto): Promise<DocumentType<UserBalanceEntity>> {
    const userBalance = await this.userBalanceModel.create(dto);

    this.logger.info(`User balance ${userBalance} created!`);

    return userBalance
  }


  public async getBalance(userId: string): Promise<DocumentType<UserBalanceEntity>[]> {
    return this.userBalanceModel
      .find({userId})
      .exec();
  }


  public async update(userBalanceId: string, dto: UpdateUserBalanceDto): Promise<DocumentType<UserBalanceEntity> | null> {
    this.logger.info(`User balance ${userBalanceId} was changed!`);

    return this.userBalanceModel.findByIdAndUpdate(userBalanceId, dto, {new: true}).exec();
  }
}