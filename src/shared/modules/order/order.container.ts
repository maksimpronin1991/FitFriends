import { Container } from "inversify";
import { OrderService } from "./order-service.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultOrderService } from "./default-order.service.js";

export function createOrderContainer() {
  const orderContainer = new Container();
  orderContainer.bind<OrderService>(Component.OrderService).to(DefaultOrderService).inSingletonScope();

  return orderContainer;
}