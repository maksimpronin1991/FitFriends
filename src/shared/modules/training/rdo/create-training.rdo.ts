import { Expose } from "class-transformer";

export class CreateTrainingRdo {
  @Expose()
  title: string;

  @Expose()
  backgroundImage: string;

  
  @Expose()
  level: 'beginner' | 'amateur' | 'professional';
  
  @Expose()
  trainingType: 'йога' | 'бег' | 'бокс' | 'стрейчинг' | 'кроссфит' | 'аэробика' | 'пилатес' ;
  
  @Expose()
  duration: '10-30 min' | '30-50 min' | '50-80 min' | '80-100 min';
  
  @Expose()
  price: number;
  
  @Expose()
  calories: number;
  
  @Expose()
  description: string;
  
  @Expose()
  gender: 'female' | 'male' | 'all';
  
  @Expose()
  video: string;
  
  @Expose()
  rating: number;
  
  @Expose()
  trainerId: string;
  
  @Expose()
  specialOffer: boolean;
}