import { DocumentType, types } from "@typegoose/typegoose";
import { OrderDto } from "./dto/order.dto.js";
import { OrderService } from "./order-service.interface.js";
import { OrderEntity } from "./order.entity.js";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.enum.js";
import { Logger } from "../../libs/logger/logger.interface.js";

@injectable()
export class DefaultOrderService implements OrderService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.OrderModel) private readonly OrderModel: types.ModelType<OrderEntity>,
  ) {}

  public async createOrder(orderData: OrderDto): Promise<DocumentType<OrderEntity>> {
    const order = new OrderEntity(orderData);

    const result = await this.OrderModel.create(order);
    this.logger.info(`Order ${order.id} created!`);
    return result
  }

  public async getOrderByIdForTrainer(TrainerId: string): Promise<DocumentType<OrderEntity> | null> {
    return this.OrderModel.findById({trainerId: TrainerId});
  }

  public async getOrdersByIdForUser(UserId: string): Promise<OrderEntity[]> {
    return this.OrderModel.find({userId: UserId});
  }

}