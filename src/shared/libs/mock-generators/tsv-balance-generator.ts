import { OfferGenerator } from './tsv-generator.interface.js';
import {  getRandomItem } from '../../helpers/index.js';
import { MockBalanceData } from '../../types/mocks-types/mock-balance-data.type.js';



export class TSVBalanceGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockBalanceData) {}

  public generate(): string {
    const training = getRandomItem<string>(this.mockData.training);
    const quantityTraining = getRandomItem<string>(this.mockData.quantityTraining);

    return [
      training,
      quantityTraining
    ].join('\t');
  }
}