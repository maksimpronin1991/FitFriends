import { DocumentType, types } from "@typegoose/typegoose";
import { ReviewService } from "./review-service.interface.js";
import { ReviewEntity } from "./review.entity.js";
import { ReviewDto } from "./dto/review.dto.js";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.enum.js";
import { Logger } from "../../libs/logger/logger.interface.js";
import { DEFAULT_REVIEW_COUNT } from "./review.constant.js";

@injectable()
export class DefaultReviewService implements ReviewService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.ReviewModel) private readonly ReviewModel: types.ModelType<ReviewEntity>,    
  ) {}
  public async create(dto: ReviewDto): Promise<DocumentType<ReviewEntity>> {
    const result = await this.ReviewModel.create(dto);
    this.logger.info(`Review for ${dto.trainingId} created!`);
    return result
  }

  public async getReviews(trainingId: string,count?: number): Promise<ReviewEntity[]> {
    const limit = count ?? DEFAULT_REVIEW_COUNT
    return this.ReviewModel
      .find({trainingId: trainingId},{}, {limit})
      .exec();
  }
}