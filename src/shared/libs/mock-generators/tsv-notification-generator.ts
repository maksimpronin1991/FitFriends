import { OfferGenerator } from './tsv-generator.interface.js';
import {  getRandomItem } from '../../helpers/index.js';
import { MockNotificationDate } from '../../types/mocks-types/mock-notification-data.type.js';



export class TSVNotifyGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockNotificationDate) {}

  public generate(): string {
    const date = getRandomItem<string>(this.mockData.dates);
    const user = getRandomItem<string>(this.mockData.users);
    const message = getRandomItem<string>(this.mockData.messages);

    return [
      date,
      user,
      message
    ].join('\t');
  }
}