import { TrainingType } from "./user.type.js";

export type Training = {
  title: string; // Min length: 1, Max length: 15
  backgroundImage: string; // Image in jpg/png format
  level: 'beginner' | 'amateur' | 'professional';
  trainingType: TrainingType[];
  duration: '10-30 min' | '30-50 min' | '50-80 min' | '80-100 min';
  price: number; // >= 0
  calories: number; // Min: 1000, Max: 5000
  description: string; // Min length: 10, Max length: 140
  gender: 'female' | 'male' | 'all';
  video: string; // Video format: mov/avi/mp4
  rating: number; // Default: 0
  trainer: string;
  specialOffer: boolean;
};