import { UserBalance } from "../../types/user-balance.type.js";

export interface UserBalanceServiceInterface {
  getBalance(userId: string): Promise<UserBalance>;
  updateBalance(userId: string, balance: UserBalance): Promise<void>;
}