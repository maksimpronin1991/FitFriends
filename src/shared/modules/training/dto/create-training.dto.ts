export class CreateTrainingDto {
  title: string;
  backgroundImage: string;
  level: 'beginner' | 'amateur' | 'professional';
  trainingType: 'йога' | 'бег' | 'бокс' | 'стрейчинг' | 'кроссфит' | 'аэробика' | 'пилатес' ;
  duration: '10-30 min' | '30-50 min' | '50-80 min' | '80-100 min';
  price: number;
  calories: number;
  description: string;
  gender: 'female' | 'male' | 'all';
  video: string;
  rating: number;
  trainerId: string;
  specialOffer: boolean;
}