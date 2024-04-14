export class TrainingDto {
  title: string;
  backgroundImage: string;
  level: 'beginner' | 'amateur' | 'professional';
  trainingType: string[];
  duration: '10-30 min' | '30-50 min' | '50-80 min' | '80-100 min';
  price: number;
  calories: number;
  description: string;
  gender: 'female' | 'male' | 'all';
  video: string;
  rating: number;
  trainer: string;
  specialOffer: boolean;
}