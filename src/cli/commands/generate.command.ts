import got from 'got';
import { MockBalanceData, MockNotificationDate, MockOrderDate, MockReviewData, MockTrainDate, MockUserDate, MockTrainingRequestDate } from '../../shared/types/mocks-types/index.js';
import { Command } from './command.interface.js';

export class GenerateCommand implements Command {
  private initialData: MockUserDate | MockTrainingRequestDate | MockReviewData | MockTrainDate | MockOrderDate | MockBalanceData | MockNotificationDate

  private async load(url: string) {
    try {
      this.initialData = await got.get(url).json();
    } catch {
      throw new Error(`Can't load data from ${url}`);
    }
  }

  private async write(filepath: string, count: number) {
    
  }

  public getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const entityCount = Number.parseInt(count, 10);

    try {
      await this.load(url);
    } catch (error: unknown) {
      console.error('Can\'t generate data');

      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}