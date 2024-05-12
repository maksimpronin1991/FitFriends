import { DocumentType } from "@typegoose/typegoose";
import { ReviewDto } from "./dto/create-review.dto.js";
import { ReviewEntity } from "./review.entity.js";

export interface ReviewService {
  create(dto: ReviewDto): Promise<DocumentType<ReviewEntity>>;
  getReviews(trainingId: string): Promise<ReviewEntity[]>
}