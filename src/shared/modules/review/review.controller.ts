import { inject, injectable } from "inversify";
import { BaseController, HttpMethod } from "../../libs/rest/index.js";
import { Logger } from "../../libs/logger/logger.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultReviewService } from "./default-review.service.js";
import { CreateReviewRequest } from "./create-review-request.type.js";
import { fillDTO } from "../../helpers/common.js";
import { ReviewRdo } from "./rdo/create-review.rdo.js";
import { Response,Request } from 'express';

@injectable()
export class ReviewController extends BaseController {

  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.ReviewService) private readonly reviewService: DefaultReviewService,
  ){
    super(logger);
    this.logger.info('Register routes for ReviewController');

    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create });
    this.addRoute({ path: '/:trainingId', method: HttpMethod.Get, handler: this.getReviews });
  }


  public async create({ body }:CreateReviewRequest, res: Response): Promise<void> {

    const result = await this.reviewService.create(body);
    this.created(res, fillDTO(ReviewRdo, result));
  }


  public async getReviews(_req: Request, res: Response): Promise<void> {

    const reviews = await this.reviewService.getReviews(_req.params.trainingId);
    console.log(reviews)

    this.ok(res, reviews);
  }
}