import { DocumentType } from "@typegoose/typegoose";
import { ReviewService } from "./review-service.interface.js";
import { ReviewEntity, ReviewModel } from "./review.entity.js";
import { ReviewDto } from "./dto/review.dto.js";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.enum.js";
import { Logger } from "../../libs/logger/logger.interface.js";

@injectable()
export class DefaultReviewService implements ReviewService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
  ) {}
  public async create(dto: ReviewDto): Promise<DocumentType<ReviewEntity>> {
    const review = new ReviewEntity(dto);
    const result = await ReviewModel.create(review);
    this.logger.info(`Review ${review.id} created!`);
    return result
  }

  public async getReviews(trainingId: string): Promise<ReviewEntity[]> {
    return ReviewModel.find({training: trainingId}).exec();
  }
}