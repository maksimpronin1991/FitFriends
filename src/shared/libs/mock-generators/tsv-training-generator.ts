import { Generator } from './tsv-generator.interface.js';
import { MockTrainingDate } from '../../types/mocks-types/mock-training-data.type.js';
import {  getRandomItem } from '../../helpers/index.js';



export class TSVTrainGenerator implements Generator {
  constructor(private readonly mockData: MockTrainingDate) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const backgroundImage = getRandomItem<string>(this.mockData.backgroundImages);
    const level = getRandomItem<string>(this.mockData.levels);
    const trainingType = getRandomItem<string>(this.mockData.trainingTypes);
    const duration = getRandomItem<string>(this.mockData.durations);
    const price = getRandomItem<string>(this.mockData.prices);
    const calorie = getRandomItem<string>(this.mockData.calories);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const gender = getRandomItem<string>(this.mockData.genders);
    const video = getRandomItem<string>(this.mockData.videos);
    const rating = getRandomItem<string>(this.mockData.ratings);
    const trainer = getRandomItem<string>(this.mockData.trainers);
    const specialOffer = getRandomItem<string>(this.mockData.specialOffers);

    return [
      title,
      backgroundImage,
      level,
      trainingType,
      duration,
      price,
      calorie,
      description,
      gender,
      video,
      rating,
      trainer,
      specialOffer

    ].join('\t');
  }
}