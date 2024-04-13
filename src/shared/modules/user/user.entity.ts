import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { TrainingType, User } from "../../types/user.type.js";
import { createSHA256 } from "../../helpers/hash.js";

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({ required: true, minlength: 1, maxlength: 15 })
  public name: string;

  @prop({ required: true, unique: true, match: [EMAIL_REGEXP, 'Email is incorrect'], })
  public email: string;

  @prop({ required: true })
  public avatar: string;

  @prop({ required: true })
  public gender: 'женский' | 'мужской' | 'неважно';

  @prop({ required: false })
  public birthdate: string;

  @prop({ required: true })
  public role: 'пользователь' | 'тренер';

  @prop({ required: true, minlength: 10, maxlength: 140 })
  public description: string;

  @prop({ required: true })
  public location: 'Пионерская' | 'Петроградская' | 'Удельная' | 'Звёздная' | 'Спортивная';

  @prop({ required: true })
  public image: string;

  @prop({ required: false })
  public trainingLevel: 'новичок' | 'любитель' | 'профессионал';

  @prop({ required: true, type: () => [String], enum: ['йога', 'бег', 'бокс', 'стрейчинг', 'кроссфит', 'аэробика', 'пилатес'], validate: {
    validator: (value: TrainingType[]) => value.length === 3,
    message: 'You must select exactly 3 training types',
  } })
  trainingTypes: TrainingType[];

  @prop({ required: false })
  public trainingDuration: '10-30 мин' | '30-50 мин' | '50-80 мин' | '80-100 мин';

  @prop({ required: false, min: 1000, max: 5000 })
  public caloriesPerDay: number;

  @prop({ required: false, min: 1000, max: 5000 })
  public caloriesPerWorkout: number;

  @prop({ required: false })
  public isAvailableForTraining: boolean;

  @prop({ required: false })
  public certificates: string;

  @prop({ required: false, minlength: 10, maxlength: 140 })
  public achievements: string;

  @prop({ required: false })
  public privateTraining: boolean;

  @prop({ required: true, minlength: 6, maxlength: 12 })
  private password?: string;

  constructor(user: User) {
    super();

    this.name = user.name;
    this.email = user.email;
    this.avatar = user.avatar;
    this.gender = user.gender; 
    this.birthdate = user.birthdate;
    this.role = user.role;
    this.description = user.description;
    this.location = user.location;
    this.image = user.image;
    this.trainingLevel = user.trainingLevel;
    this.trainingTypes = user.trainingTypes;
    this.trainingDuration = user.trainingDuration;
    this.caloriesPerDay = user.caloriesPerDay;
    this.caloriesPerWorkout = user.caloriesPerWorkout;
    this.isAvailableForTraining = user.isAvailableForTraining;
    this.certificates = user.certificates;
    this.achievements = user.achievements;
    this.privateTraining = user.privateTraining;
  }
  public setPassword(password: string, salt: string): void {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);