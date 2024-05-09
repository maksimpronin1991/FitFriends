import { defaultClasses, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import {  User } from "../../types/user.type.js";
import { createSHA256 } from "../../helpers/hash.js";


export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})
export class UserEntity extends defaultClasses.TimeStamps{
  @prop({ required: true, minlength: 1, maxlength: 15, default: '', type: () => String })
  public name: string;

  @prop({ required: true, unique: true,  type: () => String })
  public email: string;

  @prop({ required: true, default: '' , type: () => String })
  public avatar: string;

  @prop({ required: true, type: () => String  })
  public gender: 'женский' | 'мужской' | 'неважно';

  @prop({ required: false, type: () => String  })
  public birthdate: string;

  @prop({ required: true , type: () => String })
  public role: 'пользователь' | 'тренер';

  @prop({ required: true, minlength: 10, maxlength: 140, type: () => String  })
  public description: string;

  @prop({ required: true, type: () => String  })
  public location: 'Пионерская' | 'Петроградская' | 'Удельная' | 'Звёздная' | 'Спортивная';

  @prop({ required: true, type: () => String  })
  public image: string;

  @prop({ required: false, type: () => String  })
  public trainingLevel: 'новичок' | 'любитель' | 'профессионал';

  @prop({ required: true, type: () => [String]})
  trainingTypes: 'йога' | 'бег' | 'бокс' | 'стрейчинг' | 'кроссфит' | 'аэробика' | 'пилатес';

  @prop({ required: false, type: () => String  })
  public trainingDuration: '10-30 мин' | '30-50 мин' | '50-80 мин' | '80-100 мин';

  @prop({ required: false, min: 1000, max: 5000, type: () => Number  })
  public caloriesPerDay: number;

  @prop({ required: false, min: 1000, max: 5000, type: () => Number })
  public caloriesPerWorkout: number;

  @prop({ required: false , type: () => Boolean})
  public isAvailableForTraining: boolean;

  @prop({ required: false, type: () => String  })
  public certificates: string;

  @prop({ required: false, minlength: 10, maxlength: 140, type: () => String  })
  public achievements: string;

  @prop({ required: false, type: () => Boolean})
  public privateTraining: boolean;

  @prop({ required: true, default: '', type: () => String })
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