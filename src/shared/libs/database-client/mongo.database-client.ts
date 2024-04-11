import * as Mongoose from 'mongoose';
import { inject, injectable } from "inversify";
import { DatabaseClient } from "./database-client.interface.js";
import { Component } from "../../types/component.enum.js";
import { Logger } from "../logger/index.js";

@injectable()
export class MongoDatabaseClient implements DatabaseClient { 
  private mongoose: typeof Mongoose;
  private isConnected: boolean;

  constructor(
    @inject(Component.Logger) private readonly logger: Logger
  ){
    this.isConnected = false;
  }
  public isConnectedToDatabase(): boolean {
    return this.isConnected
  }

  public async connect(uri: string): Promise<void> {
    if(this.isConnectedToDatabase()){
      throw new Error('Database is already connected');
    }

    this.logger.info('Trying to connect to MongoDB...');

    this.mongoose = await Mongoose.connect(uri);
    this.isConnected = true;

    this.logger.info('Connected to MongoDB');
  }

  public async disconnect(): Promise<void> {
    if(!this.isConnectedToDatabase){
      throw new Error('Database is not connected');
    }

    await this.mongoose.disconnect?.();
    this.isConnected = false;
    this.logger.info('Disconnected from MongoDB');
  }
}