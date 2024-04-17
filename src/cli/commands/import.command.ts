import { getErrorMessage } from "../../shared/helpers/common.js";
import { getMongoURI } from "../../shared/helpers/database.js";
import { createEntity } from "../../shared/helpers/entity.js";
import { DatabaseClient } from "../../shared/libs/database-client/database-client.interface.js";
import { MongoDatabaseClient } from "../../shared/libs/database-client/mongo.database-client.js";
import { TSVFileReader } from "../../shared/libs/file-reader/tsv-file-reader.js";
import { ConsoleLogger } from "../../shared/libs/logger/console.logger.js";
import { Logger } from "../../shared/libs/logger/logger.interface.js";
import { DefaultNotificationService } from "../../shared/modules/notification/default-notification.service.js";
import { NotificationModel } from "../../shared/modules/notification/notification.entity.js";
import { DefaultOrderService } from "../../shared/modules/order/default-order.service.js";
import { OrderModel } from "../../shared/modules/order/order.entity.js";
import { DefaultPersonalTrainingService } from "../../shared/modules/personal-training/default-personal-training.service.js";
import { PersonalTrainingModel } from "../../shared/modules/personal-training/personal-training.entity.js";
import { DefaultReviewService } from "../../shared/modules/review/default-review.service.js";
import { ReviewModel } from "../../shared/modules/review/review.entity.js";
import { DefaultTrainingService } from "../../shared/modules/training/default-training.service.js";
import { TrainingModel } from "../../shared/modules/training/training.entity.js";
import { DefaultUserBalanceService } from "../../shared/modules/user-balance/default-user-balance.service.js";
import { UserBalanceModel } from "../../shared/modules/user-balance/user-balance.entity.js";
import { DefaultUserService } from "../../shared/modules/user/default-user.service.js";
import { UserModel } from "../../shared/modules/user/user.entity.js";
import { Notification } from "../../shared/types/notification.type.js";
import { Order } from "../../shared/types/order.type.js";
import { PersonalTraining } from "../../shared/types/personal-training.type.js";
import { Review } from "../../shared/types/review.type.js";
import { Training } from "../../shared/types/training.type.js";
import { UserBalance } from "../../shared/types/user-balance.type.js";
import { User } from "../../shared/types/user.type.js";
import { DEFAULT_DB_PORT } from "./command.constant.js";
import { Command } from "./command.interface.js";

export class ImportCommand implements Command {
  private userService: DefaultUserService;
  private userBalanceService: DefaultUserBalanceService;
  private trainingService: DefaultTrainingService;
  private reviewService: DefaultReviewService;
  private personalTrainingService: DefaultPersonalTrainingService;
  private orderService: DefaultOrderService;
  private notificationService: DefaultNotificationService;
  private databaseClient: DatabaseClient;
  private logger: Logger;
  private salt: string;
  private actualType: string

  constructor() {
    this.onImportedLine = this.onImportedLine.bind(this);
    this.onCompleteImport = this.onCompleteImport.bind(this);

    this.logger = new ConsoleLogger();
    this.databaseClient = new MongoDatabaseClient(this.logger);
    this.userService = new DefaultUserService(this.logger, UserModel);
    this.userBalanceService = new DefaultUserBalanceService(this.logger, UserBalanceModel);
    this.trainingService = new DefaultTrainingService(this.logger, TrainingModel);
    this.reviewService = new DefaultReviewService(this.logger, ReviewModel);
    this.personalTrainingService = new DefaultPersonalTrainingService(this.logger, PersonalTrainingModel);
    this.orderService = new DefaultOrderService(this.logger, OrderModel);
    this.notificationService = new DefaultNotificationService(this.logger, NotificationModel);

  }

  public getName(): string {
    return '--import';
  }

  private async onImportedLine(line: string, resolve: () => void) {
    const entity = createEntity(line,this.actualType);

    switch (this.actualType) {
      case 'user': await this.saveUser(entity[0]);
        break;
      case 'userBalance': await this.saveUserBalance(entity[0]);
        break;
      case 'training': await this.saveTraining(entity[0]);
        break;
      case 'review': await this.saveReview(entity[0]);
        break;
      case 'personalTraining': await this.savePersonalTraining(entity[0]);
        break;
      case 'order': await this.saveOrder(entity[0]);
        break;
      case 'notification': await this.saveNotification(entity[0]);
        break;

      default:  throw new Error(`Unknown type: ${this.actualType}`);
    }

    resolve();
  }

  private onCompleteImport(count: number) {
    console.info(`${count} rows imported.`);
    this.databaseClient.disconnect();
  }

  private async saveUser(user: User) {
    await this.userService.create({
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      password: user.password,
      gender: user.gender,
      birthdate: user.birthdate,
      role: user.role,
      description: user.description,
      location: user.location,
      image: user.image,
      trainingLevel: user.trainingLevel,
      trainingTypes: user.trainingTypes,
      trainingDuration: user.trainingDuration,
      caloriesPerDay: user.caloriesPerDay,
      caloriesPerWorkout: user.caloriesPerWorkout,
      isAvailableForTraining: user.isAvailableForTraining,
      certificates: user.certificates,
      achievements: user.achievements,
      privateTraining: user.privateTraining
    });
  }

  private async saveUserBalance(userBalance: UserBalance) {
    await this.userBalanceService.create({
      training: userBalance.training,
      quantityTraining: userBalance.quantityTraining
    });
  }

  private async saveTraining(training: Training) {
    await this.trainingService.create(training);
  }

  private async saveReview(review: Review) {
    await this.reviewService.create(review);
  }

  private async savePersonalTraining(personalTraining: PersonalTraining) {
    await this.personalTrainingService.create(personalTraining);
  }

  private async saveOrder(order: Order) {
    await this.orderService.createOrder(order);
  }

  private async saveNotification(notification: Notification) {
    await this.notificationService.create(notification);
  }

  public async execute(filename: string, login: string, password: string, host: string, dbname: string, salt: string, actualType: string): Promise<void> {
    const uri = getMongoURI(login, password, host, DEFAULT_DB_PORT, dbname);

    this.salt = salt;
    this.actualType = actualType;



 

    await this.databaseClient.connect(uri);

    const fileReader = new TSVFileReader(filename.trim());
    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompleteImport);

    try {
      await fileReader.read();
    } catch (error) {
      console.error(`can't read file: ${filename}`);
      console.error(getErrorMessage(error));
    }
  }
}