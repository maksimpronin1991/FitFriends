export type TrainingType = 'йога' | 'бег' | 'бокс' | 'стрейчинг' | 'кроссфит' | 'аэробика' | 'пилатес';


export type User = {
  name: string,
  email: string,
  avatar: string,
  password: string,
  gender: 'женский'| 'мужской'|'неважно',
  birthdate: string,
  role: 'пользователь' | 'тренер',
  description: string,
  location: 'Пионерская'| 'Петроградская'| 'Удельная'| 'Звёздная'| 'Спортивная',
  image: string,
  trainingLevel: 'новичок' | 'любитель' | 'профессионал',
  trainingTypes:TrainingType[]
  trainingDuration: '10-30 мин'| '30-50 мин'| '50-80 мин'| '80-100 мин',
  caloriesPerDay: number,
  caloriesPerWorkout: number,
  isAvailableForTraining: boolean,
  certificates: string,
  achievements: string,
  privateTraining:boolean,
}