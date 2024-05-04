
export class UpdateUserDto {
  public name?: string;
  public avatar?: string;
  public gender?: 'женский' | 'мужской' | 'неважно';
  public birthdate?: string;
  public description?: string;
  public location?: 'Пионерская' | 'Петроградская' | 'Удельная' | 'Звёздная' | 'Спортивная';
  public image?: string;
  public trainingLevel?: 'новичок' | 'любитель' | 'профессионал';
  public trainingTypes?: 'йога' | 'бег' | 'бокс' | 'стрейчинг' | 'кроссфит' | 'аэробика' | 'пилатес';;
  public trainingDuration?: '10-30 мин' | '30-50 мин' | '50-80 мин' | '80-100 мин';
  public caloriesPerDay?: number;
  public caloriesPerWorkout?: number;
  public isAvailableForTraining?: boolean;
  public certificates?: string;
  public achievements?: string;
  public privateTraining?:boolean;
}