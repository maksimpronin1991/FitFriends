export class OrderDto {
  viewOrder: "abonement";
  service: string; // Specify the ID of an existing training in the system
  price: number;
  quantity: number; // Must be an integer between 1 and 50
  orderPrice: number; // Calculated as количество * ценаТренировки
  payMethod: "visa" | "mir" | "umoney";
}