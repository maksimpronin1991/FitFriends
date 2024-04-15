import { inject } from "inversify";
import { UserBalance } from "../../types/user-balance.type.js";
import { DefaultUserBalanceServiceInterface } from "./user-balance-service.interface.js";
import { Logger } from "../../libs/logger/logger.interface.js";
import { Component } from "../../types/component.enum.js";
import { DocumentType, types } from "@typegoose/typegoose";
import { UserBalanceEntity } from "./user-balance.entity.js";
import { UserBalanceDto } from "./dto/user-balance.dto.js";

export class DefaultUserBalanceService implements DefaultUserBalanceServiceInterface {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.UserBalanceModel) private readonly userBalanceModel: types.ModelType<UserBalanceEntity>,
  ) { }

  public async getBalance(categoryId: string): Promise<DocumentType<UserBalance> | null> {
    return this.userBalanceModel.findById(categoryId).exec();
  }

  public async create(dto: UserBalanceDto): Promise<DocumentType<UserBalanceEntity>> {
    const user = new UserBalanceEntity(dto);

    const result = await this.userBalanceModel.create(user);
    this.logger.info(`User balance ${result} created!`);

    return result
  }

  public async update(userBalanceId: string, dto: UserBalanceDto): Promise<DocumentType<UserBalanceEntity> | null> {
    this.logger.info(`User balance ${userBalanceId} was changed!`);

    return this.userBalanceModel.findByIdAndUpdate(userBalanceId, dto, {new: true}).exec();
  }
}