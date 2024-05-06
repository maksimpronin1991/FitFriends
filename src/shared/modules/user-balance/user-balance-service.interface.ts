import { DocumentType } from "@typegoose/typegoose";
import { UserBalanceDto } from "./dto/user-balance.dto.js";
import { UserBalanceEntity } from "./user-balance.entity.js";
import { UpdateUserBalanceDto } from "./dto/update-user-balance.dto.js";

export interface UserBalanceService {
  create(dto: UserBalanceDto): Promise<DocumentType<UserBalanceEntity>>;
  getUserBalance(userId: string): Promise<DocumentType<UserBalanceEntity>[]>;
  update(userBalanceId: string, dto: UpdateUserBalanceDto): Promise<DocumentType<UserBalanceEntity> | null>
}