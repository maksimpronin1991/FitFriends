import { Ref, defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Order } from "../../types/order.type.js";
import { TrainingEntity } from "../training/training.entity.js";

export interface OrderEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'orders',
    timestamps: true
  }
})
export class OrderEntity extends defaultClasses.TimeStamps implements Order{
  @prop({required: true, type: () => String })
  public viewOrder: "abonement";
  @prop({required: true, ref: TrainingEntity })
  public serviceId: Ref<TrainingEntity>; // Specify the ID of an existing training in the system
  @prop({required: false, type: () => Number })
  public price: number;
  @prop({required: true, min: 1, max: 50, type: () => Number})
  public quantity: number; // Must be an integer between 1 and 50
  @prop({required: false , type: () => Number})
  public orderPrice: number; // Calculated as количество * ценаТренировки
  @prop({required: true , type: () => String})
  public payMethod: "visa" | "mir" | "umoney";

};

export const OrderModel = getModelForClass(OrderEntity)