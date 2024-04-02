import { OfferGenerator } from './tsv-generator.interface.js';
import {  getRandomItem } from '../../helpers/index.js';
import { MockReviewData } from '../../types/mocks-types/mock-review-data.type.js';



export class TSVReviewGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockReviewData) {}

  public generate(): string {
    const author = getRandomItem<string>(this.mockData.authors);
    const training = getRandomItem<string>(this.mockData.trainings);
    const rating = getRandomItem<string>(this.mockData.ratings);
    const text = getRandomItem<string>(this.mockData.texts);
    const createdAt = getRandomItem<string>(this.mockData.createdAts);


    return [
      author,
      training,
      rating,
      text,
      createdAt
    ].join('\t');
  }
}