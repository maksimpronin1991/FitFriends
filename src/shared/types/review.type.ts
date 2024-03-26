export type Review = {
  author: string; // Existing user with role 'User'
  training: string; // Existing training
  rating: number; // Number between 1 and 5 (inclusive)
  text: string; // Min length: 100, Max length: 1024
  createdAt: string; // Date of creation
};