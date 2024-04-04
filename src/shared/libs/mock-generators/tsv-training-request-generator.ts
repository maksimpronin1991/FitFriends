import { Generator } from './tsv-generator.interface.js';
import { MockTrainingRequestDate } from '../../types/mocks-types/index.js';
import {  getRandomItem } from '../../helpers/index.js';



export class TSVRequestGenerator implements Generator {
  constructor(private readonly mockData: MockTrainingRequestDate) {}

  public generate(): string {
    const initiator = getRandomItem<string>(this.mockData.initiators);
    const user = getRandomItem<string>(this.mockData.users);
    const dateCreated = getRandomItem<string>(this.mockData.dateCreated);
    const dateStatusChanged = getRandomItem<string>(this.mockData.dateStatusChanged);
    const requestStatuse = getRandomItem<string>(this.mockData.requestStatuses);
    
    return [
      initiator,
      user,
      dateCreated,
      dateStatusChanged,
      requestStatuse     
    ].join('\t');
  }
}