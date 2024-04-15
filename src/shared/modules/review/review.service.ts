import { DocumentType } from "@typegoose/typegoose";
import { ReviewService } from "./review-service.interface.ts.js";
import { ReviewEntity, ReviewModel } from "./review.entity.js";
import { ReviewDto } from "./dto/review.dto.js";


export class DefaultReviewService implements ReviewService {

  public async create(dto: ReviewDto): Promise<DocumentType<ReviewEntity>> {
    return ReviewModel.create(dto);
  }

  public async getReviews(trainingId: string): Promise<ReviewEntity[]> {
    return ReviewModel.find({training: trainingId}).exec();
  }



}