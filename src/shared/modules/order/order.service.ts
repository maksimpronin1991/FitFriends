import { DocumentType } from "@typegoose/typegoose";
import { OrderDto } from "./dto/order.dto.js";
import { OrderService } from "./order-service.interface.js";
import { OrderEntity, OrderModel } from "./order.entity.js";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.enum.js";
import { Logger } from "../../libs/logger/logger.interface.js";

@injectable()
export class DefaultOrderService implements OrderService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
  ) {}

  public async createOrder(orderData: OrderDto): Promise<DocumentType<OrderEntity>> {
    const order = new OrderEntity(orderData);

    const result = await OrderModel.create(order);
    this.logger.info(`Order ${order.id} created!`);
    return result
  }

  public async getOrderById(id: string): Promise<DocumentType<OrderEntity> | null> {
    return OrderModel.findById(id)
  }

  public async getOrders(UserId: string): Promise<OrderEntity[]> {
    return OrderModel.find({userId: UserId});
  }

}