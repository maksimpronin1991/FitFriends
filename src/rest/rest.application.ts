import { inject, injectable } from "inversify";
import { Config } from "../shared/libs/config/config.interface.js";
import { RestSchema } from "../shared/libs/config/rest.schema.js";
import { Logger } from "../shared/libs/logger/index.js";
import { Component } from "../shared/types/component.enum.js";
import { DatabaseClient } from "../shared/libs/database-client/database-client.interface.js";
import { getMongoURI } from "../shared/helpers/database.js";

@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
    @inject(Component.DatabaseClient) private readonly databaseClient: DatabaseClient
  ) { }

  private async _initDb() {

    const mongoUri = getMongoURI(
      this.config.get('DB_USER'),
      this.config.get('DB_PASSWORD'),
      this.config.get('DB_HOST'),
      this.config.get('DB_PORT'),
      this.config.get('DB_NAME')
    )
    return this.databaseClient.connect(mongoUri)
  }

  public async init() {
    this.logger.info("RestApplication init");
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);

    this.logger.info('init db');
    await this._initDb();
    this.logger.info('init db done');
  }
}