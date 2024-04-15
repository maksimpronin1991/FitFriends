import { DocumentType } from "@typegoose/typegoose";
import { OrderDto } from "./dto/order.dto.js";
import { OrderService } from "./order-service.interface.js";
import { OrderEntity, OrderModel } from "./order.entity.js";


export class DefaultOrderService implements OrderService {

  public async createOrder(orderData: OrderDto): Promise<DocumentType<OrderEntity>> {
    const order = new OrderEntity(orderData);
    return OrderModel.create(order)
  }

  public async getOrderById(id: string): Promise<DocumentType<OrderEntity> | null> {
    return OrderModel.findById(id)
  }

  public async getOrders(UserId: string): Promise<OrderEntity[]> {
    return OrderModel.find({userId: UserId});
  }

}