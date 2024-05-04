import { DocumentType, types } from "@typegoose/typegoose";
import { OrderDto } from "./dto/order.dto.js";
import { OrderService } from "./order-service.interface.js";
import { OrderEntity } from "./order.entity.js";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.enum.js";
import { Logger } from "../../libs/logger/logger.interface.js";
import { DEFAULT_ORDER_COUNT } from "./order.constant.js";

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


  public async getOrders(count?: number): Promise<DocumentType<OrderEntity>[]> {
    const limit = count ?? DEFAULT_ORDER_COUNT
    return this.OrderModel
      .find({},{},{limit})
      .populate('serviceId')
      .exec();
  }

}