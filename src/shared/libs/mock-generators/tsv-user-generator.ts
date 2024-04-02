import { OfferGenerator } from './tsv-generator.interface.js';
import { MockUserDate } from '../../types/mocks-types/mock-user-date.type.js';
import {  getRandomItem, getRandomItems } from '../../helpers/index.js';



export class TSVUserGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockUserDate) {}

  public generate(): string {
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const password = getRandomItem<string>(this.mockData.passwords);
    const gender = getRandomItem<string>(this.mockData.genders);
    const birthdate= getRandomItem(this.mockData.birthdays);
    const role = getRandomItem(this.mockData.roles);
    const location = getRandomItem(this.mockData.locations);
    const image = getRandomItem(this.mockData.images);
    const createdAt = getRandomItem(this.mockData.createdAt);
    const trainingLevel = getRandomItem(this.mockData.trainingLevels);
    const trainingTypes = getRandomItems(this.mockData.trainingTypes).join(';');
    const trainingDuration = getRandomItem(this.mockData.trainingDurations);
    const caloriesPerDay = getRandomItem(this.mockData.caloriesPerDay);
    const caloriesPerWorkout = getRandomItem(this.mockData.caloriesPerWorkout);
    const isAvailableForTraining = getRandomItem(this.mockData.isAvailableForTraining);
    const certificates = getRandomItems(this.mockData.certificates).join(';');
    const achievements = getRandomItem(this.mockData.achievements);
    const privateTraining = getRandomItem(this.mockData.privateTraining);

    return [
      name,
      email,
      avatar,
      password,
      gender,
      birthdate,
      role,
      location,
      image,
      createdAt,
      trainingLevel,
      trainingTypes,
      trainingDuration,
      caloriesPerDay,
      caloriesPerWorkout,
      isAvailableForTraining,
      certificates,
      achievements,
      privateTraining
    ].join('\t');
  }
}