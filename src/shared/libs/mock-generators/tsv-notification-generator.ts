import { Generator } from './tsv-generator.interface.js';
import {  getRandomItem } from '../../helpers/index.js';
import { MockNotificationData } from '../../types/mocks-types/mock-notification-data.type.js';



export class TSVNotifyGenerator implements Generator {
  constructor(private readonly mockData: MockNotificationData) {}

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