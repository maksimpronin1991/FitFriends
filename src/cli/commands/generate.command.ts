import got from 'got';
import { MockBalanceData, MockNotificationDate, MockOrderDate, MockReviewData, MockTrainDate, MockUserDate, MockTrainingRequestDate } from '../../shared/types/mocks-types/index.js';
import { Command } from './command.interface.js';
import { TSVUserGenerator } from '../../shared/libs/mock-generators/tsv-user-generator.js';
import { appendFile } from 'node:fs/promises';
import { TSVRequestGenerator } from '../../shared/libs/mock-generators/tsv-training-request-generator.js';
import { TSVTrainGenerator } from '../../shared/libs/mock-generators/tsv-train-generator.js';
import { TSVReviewGenerator } from '../../shared/libs/mock-generators/tsv-review-generator.js';
import { TSVOrderGenerator } from '../../shared/libs/mock-generators/tsv-order-generator.js';
import { TSVNotifyGenerator } from '../../shared/libs/mock-generators/tsv-notification-generator.js';
import { TSVBalanceGenerator } from '../../shared/libs/mock-generators/tsv-balance-generator.js';

export class GenerateCommand implements Command {
  private initialData: MockUserDate | MockTrainingRequestDate | MockReviewData | MockTrainDate | MockOrderDate | MockBalanceData | MockNotificationDate

  private async load(url: string) {
    try {
      this.initialData = await got.get(url).json();
    } catch {
      throw new Error(`Can't load data from ${url}`);
    }
  }

  private async write(filepath: string, count: number, type: string) {
    switch (type) {
      case 'user':
        const userGenerator = new TSVUserGenerator(this.initialData as MockUserDate);
        for (let i = 0; i < count; i++) {
          await appendFile(
            filepath,
            `${userGenerator.generate()}\n`,
            { encoding: 'utf8' }
          );
        }
        break;
      case 'trainingRequest':
        const trainingRequestGenerator = new TSVRequestGenerator(this.initialData as MockTrainingRequestDate);
        for (let i = 0; i < count; i++) {
          await appendFile(
            filepath,
            `${trainingRequestGenerator.generate()}\n`,
            { encoding: 'utf8' }
          );
        }
        break;
      case 'trainingRequest':
        const trainGenerator = new TSVTrainGenerator(this.initialData as MockTrainDate);
        for (let i = 0; i < count; i++) {
          await appendFile(
            filepath,
            `${trainGenerator.generate()}\n`,
            { encoding: 'utf8' }
          );
        }
        break;
      case 'trainingRequest':
        const rewiewGenerator = new TSVReviewGenerator(this.initialData as MockReviewData);
        for (let i = 0; i < count; i++) {
          await appendFile(
            filepath,
            `${rewiewGenerator.generate()}\n`,
            { encoding: 'utf8' }
          );
        }
        break;
      case 'trainingRequest':
        const orderGenerator = new TSVOrderGenerator(this.initialData as MockOrderDate);
        for (let i = 0; i < count; i++) {
          await appendFile(
            filepath,
            `${orderGenerator.generate()}\n`,
            { encoding: 'utf8' }
          );
        }
        break;
      case 'trainingRequest':
        const notificationGenerator = new TSVNotifyGenerator(this.initialData as MockNotificationDate);
        for (let i = 0; i < count; i++) {
          await appendFile(
            filepath,
            `${notificationGenerator.generate()}\n`,
            { encoding: 'utf8' }
          );
        }
        break;
      case 'trainingRequest':
        const balanceGenerator = new TSVBalanceGenerator(this.initialData as MockBalanceData);
        for (let i = 0; i < count; i++) {
          await appendFile(
            filepath,
            `${balanceGenerator.generate()}\n`,
            { encoding: 'utf8' }
          );
        }
        break;
    }

  }

  public getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url, type] = parameters;
    const entityCount = Number.parseInt(count, 10);

    try {
      await this.load(url);
      await this.write(filepath, entityCount, type);
    } catch (error: unknown) {
      console.error('Can\'t generate data');

      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}