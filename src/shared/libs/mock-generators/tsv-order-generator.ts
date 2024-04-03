import { Generator } from './tsv-generator.interface.js';
import {  getRandomItem } from '../../helpers/index.js';
import { MockOrderDate } from '../../types/mocks-types/mock-order-data.type.js';



export class TSVOrderGenerator implements Generator {
  constructor(private readonly mockData: MockOrderDate) {}

  public generate(): string {
    const viewOrder = getRandomItem<string>(this.mockData.viewOrders);
    const service = getRandomItem<string>(this.mockData.services);
    const price = getRandomItem<string>(this.mockData.prices);
    const quantity = getRandomItem<string>(this.mockData.quantitys);
    const orderPrice = getRandomItem<string>(this.mockData.orderPrices);
    const payMethod = getRandomItem<string>(this.mockData.payMethods);
    const createdOrderDate = getRandomItem<string>(this.mockData.createdOrderDates);

    return [
      viewOrder,
      service,
      price,
      quantity,
      orderPrice,
      payMethod,
      createdOrderDate
    ].join('\t');
  }
}