import { Generator } from './tsv-generator.interface.js';
import {  getRandomItem } from '../../helpers/index.js';
import { MockBalanceData } from '../../types/mocks-types/mock-balance-data.type.js';



export class TSVBalanceGenerator implements Generator {
  constructor(
    private readonly mockData: MockBalanceData
    ) {}

  public generate(): string {
    const quantityTraining = getRandomItem<string>(this.mockData.quantityTraining);
    console.log(1)
    const training = getRandomItem<string>(this.mockData.training);

   

    return [
      training,
      quantityTraining
    ].join('\t');
  }
}