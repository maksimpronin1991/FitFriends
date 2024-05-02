import { DocumentType } from "@typegoose/typegoose"
import { OrderDto } from "./dto/order.dto.js"
import { OrderEntity } from "./order.entity.js"

export interface OrderService {
  createOrder(orderData: OrderDto): Promise<DocumentType<OrderEntity>>
  getOrders(): Promise<DocumentType<OrderEntity>[]>
}