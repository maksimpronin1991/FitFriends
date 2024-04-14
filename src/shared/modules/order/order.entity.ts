import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Order } from "../../types/order.type.js";

export interface UserEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'trainings',
    timestamps: true
  }
})
export class OrderEntity extends defaultClasses.TimeStamps implements Order{
  @prop({required: true })
  viewOrder: "abonement";
  @prop({required: true })
  service: string; // Specify the ID of an existing training in the system
  @prop({required: false })
  price: number;
  @prop({required: true, min: 1, max: 50})
  quantity: number; // Must be an integer between 1 and 50
  @prop({required: true })
  orderPrice: number; // Calculated as количество * ценаТренировки
  @prop({required: true })
  payMethod: "visa" | "mir" | "umoney";
};

export const OrderModel = getModelForClass(OrderEntity)