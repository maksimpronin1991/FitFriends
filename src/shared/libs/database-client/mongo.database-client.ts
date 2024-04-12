import * as Mongoose from 'mongoose';
import { inject, injectable } from "inversify";
import { DatabaseClient } from "./database-client.interface.js";
import { Component } from "../../types/component.enum.js";
import { Logger } from "../logger/index.js";
import { setTimeout } from 'node:timers/promises';

const RETRY_COUNT = 5;
const RETRY_TIMEOUT = 1000;

@injectable()
export class MongoDatabaseClient implements DatabaseClient {
  private mongoose: typeof Mongoose;
  private isConnected: boolean;

  constructor(
    @inject(Component.Logger) private readonly logger: Logger
  ) {
    this.isConnected = false;
  }
  public isConnectedToDatabase(): boolean {
    return this.isConnected
  }

  public async connect(uri: string): Promise<void> {
    if (this.isConnectedToDatabase()) {
      throw new Error('Database is already connected');
    }

    this.logger.info('Trying to connect to MongoDB...');

    let attempt = 0;
    while (attempt < RETRY_COUNT) {
      try {
        this.mongoose = await Mongoose.connect(uri);
        this.isConnected = true;
        this.logger.info('Connected to MongoDB');
        return;
      } catch (error) {
        attempt++;
        this.logger.info(`Failed to connect to MongoDB. Attempt ${attempt}/${RETRY_COUNT}`);
        await setTimeout(RETRY_TIMEOUT);
      }
    }

    throw new Error(`Unable to establish database connection after ${RETRY_COUNT}`);
  }

  public async disconnect(): Promise<void> {
    if (!this.isConnectedToDatabase) {
      throw new Error('Database is not connected');
    }

    await this.mongoose.disconnect?.();
    this.isConnected = false;
    this.logger.info('Disconnected from MongoDB');
  }
}