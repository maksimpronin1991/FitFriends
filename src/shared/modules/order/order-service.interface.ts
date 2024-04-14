import { OrderDto } from "./dto/order.dto.js"
import { OrderEntity } from "./order.entity.js"

export interface OrderService {
  createOrder(orderData: OrderDto): Promise<OrderEntity>
  getOrderById(id: string): Promise<OrderEntity>
  getOrders(): Promise<OrderEntity[]>
}