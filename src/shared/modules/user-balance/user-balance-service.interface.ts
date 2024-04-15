import { DocumentType } from "@typegoose/typegoose";
import { UserBalance } from "../../types/user-balance.type.js";
import { UserBalanceDto } from "./dto/user-balance.dto.js";
import { UserBalanceEntity } from "./user-balance.entity.js";

export interface DefaultUserBalanceServiceInterface {
  getBalance(userId: string): Promise<DocumentType<UserBalance> | null>;
  create(dto: UserBalanceDto): Promise<DocumentType<UserBalanceEntity>>;
  update(userBalanceId: string, dto: UserBalanceDto): Promise<DocumentType<UserBalanceEntity> | null>
}