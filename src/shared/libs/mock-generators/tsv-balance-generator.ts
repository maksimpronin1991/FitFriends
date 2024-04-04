import { Generator } from './tsv-generator.interface.js';
import {  getRandomItem } from '../../helpers/index.js';
import { MockBalanceData } from '../../types/mocks-types/mock-balance-data.type.js';


export class TSVBalanceGenerator implements Generator {
  constructor(private readonly mockData: MockBalanceData) {}

  public generate(): string {
    const training = getRandomItem<string>(this.mockData.trainings);
    const quantityTraining = getRandomItem<string>(this.mockData.quantityesTraining);

    return [
      training,
      quantityTraining
    ].join('\t');
  }
}