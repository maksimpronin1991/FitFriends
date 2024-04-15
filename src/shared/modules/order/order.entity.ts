import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Order } from "../../types/order.type.js";

export interface OrderEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'orders',
    timestamps: true
  }
})
export class OrderEntity extends defaultClasses.TimeStamps implements Order{
  @prop({required: true, type: () => String })
  viewOrder: "abonement";
  @prop({required: true, type: () => String })
  service: string; // Specify the ID of an existing training in the system
  @prop({required: false, type: () => Number })
  price: number;
  @prop({required: true, min: 1, max: 50, type: () => Number})
  quantity: number; // Must be an integer between 1 and 50
  @prop({required: false , type: () => Number})
  orderPrice: number; // Calculated as количество * ценаТренировки
  @prop({required: true , type: () => String})
  payMethod: "visa" | "mir" | "umoney";

  constructor(orderData: Order) {
    super();
    
    this.viewOrder = orderData.viewOrder;
    this.service = orderData.service;
    this.price = orderData.price;
    this.quantity = orderData.quantity;
    this.orderPrice = orderData.price * orderData.quantity;
    this.payMethod = orderData.payMethod;
  }
};

export const OrderModel = getModelForClass(OrderEntity)