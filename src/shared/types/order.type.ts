import { Ref } from "@typegoose/typegoose";
import { Training } from "./training.type.js";

export type Order = {
  viewOrder: "abonement";
  serviceId: Ref<Training>; // Specify the ID of an existing training in the system
  price: number;
  quantity: number; // Must be an integer between 1 and 50
  payMethod: "visa" | "mir" | "umoney";
};