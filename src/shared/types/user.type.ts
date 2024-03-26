type UserDescription = {
  name: string; // Min length: 1, Max length: 15, Only letters (Russian/English alphabet)
  email: string; // Valid email address, must be unique
  avatar: string; // Image in .jpg or .png format, max size 1MB
  password: string; // Min length: 6, Max length: 12
  gender: 'female' | 'male' | 'unspecified';
  birthdate?: string; // Date of birth in format 'dd.mm.yyyy', optional
  role: 'user' | 'trainer';
  description: string; // Min length: 10, Max length: 140
  location: 'Пионерская' | 'Петроградская' | 'Удельная' | 'Звёздная' | 'Спортивная';
  image: string; // Background image for user page, jpg/png format, predefined list
  createdAt: string; // Automatically filled
};

type UserAdditionalInfo = {
  trainingLevel: 'beginner' | 'intermediate' | 'advanced';
  trainingTypes: ('yoga' | 'running' | 'boxing' | 'weightlifting' | 'crossfit' | 'aerobics' | 'pilates')[];
  trainingDuration: '10-30 min' | '30-50 min' | '50-80 min' | '80-100 min';
  caloriesPerDay: number; // Min: 1000, Max: 5000
  caloriesPerWorkout: number; // Min: 1000, Max: 5000
  isAvailableForTraining: boolean;
};

type TrainerAdditionalInfo = {
  trainingLevel: 'beginner' | 'intermediate' | 'advanced';
  trainingTypes: ('yoga' | 'running' | 'boxing' | 'weightlifting' | 'crossfit' | 'aerobics' | 'pilates')[];
  certificates: File; // PDF file
  achievements: string; // Min length: 10, Max length: 140
  privateTraining: boolean;
};

export type UserInfo = UserDescription & (UserAdditionalInfo | TrainerAdditionalInfo);