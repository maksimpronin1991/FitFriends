import { Expose } from "class-transformer";

export class CreateUserRdo {
  @Expose()
  public name: string;

  @Expose()
  public email: string;

  @Expose()
  public avatar: string;

  @Expose()
  public gender: 'женский' | 'мужской' | 'неважно';

  @Expose()
  public birthdate: string;

  @Expose()
  public role: 'пользователь' | 'тренер';

  @Expose()
  public description: string;

  @Expose()
  public location: 'Пионерская' | 'Петроградская' | 'Удельная' | 'Звёздная' | 'Спортивная';

  @Expose()
  public image: string;
  
  @Expose()
  public trainingLevel: 'новичок' | 'любитель' | 'профессионал';

  @Expose()
  public trainingTypes: 'йога' | 'бег' | 'бокс' | 'стрейчинг' | 'кроссфит' | 'аэробика' | 'пилатес';;

  @Expose()
  public trainingDuration: '10-30 мин' | '30-50 мин' | '50-80 мин' | '80-100 мин';

  @Expose()
  public caloriesPerDay: number;

  @Expose()
  public caloriesPerWorkout: number;

  @Expose()
  public isAvailableForTraining: boolean;

  @Expose()
  public certificates: string;

  @Expose()
  public achievements: string;

  @Expose()
  public privateTraining:boolean;

}