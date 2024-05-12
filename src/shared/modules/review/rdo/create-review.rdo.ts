import { Expose } from "class-transformer";

export class ReviewRdo {
  @Expose()
  author: string;
  @Expose()
  trainingId: string;
  @Expose()
  rating: number;
  @Expose()
  text: string;
}