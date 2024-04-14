import { ReviewDto } from "./dto/review.dto.js";
import { ReviewEntity } from "./review.entity.js";

export interface ReviewService {
  create(dto: ReviewDto): Promise<ReviewEntity>;
  getReviews(trainingId: string): Promise<ReviewEntity[]>
}