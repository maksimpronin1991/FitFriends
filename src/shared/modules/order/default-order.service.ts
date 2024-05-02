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


    const result = await this.OrderModel.create(orderData);
    this.logger.info(`Order ${orderData.viewOrder} created!`);
    return result
  }


  public async getOrders(): Promise<DocumentType<OrderEntity>[]> {
    return this.OrderModel
      .find()
      .populate('serviceId')
      .exec();
  }

}