import { Container } from "inversify";
import { ReviewService } from "./review-service.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultReviewService } from "./default-review.service.js";
import { ReviewController } from "./review.controller.js";
import { Controller } from "../../libs/rest/index.js";
import { ReviewEntity, ReviewModel } from "./review.entity.js";
import { types } from "@typegoose/typegoose";

export function createReviewContainer() {
const reviewContainer = new Container();
reviewContainer.bind<ReviewService>(Component.ReviewService).to(DefaultReviewService).inSingletonScope();
reviewContainer.bind<types.ModelType<ReviewEntity>>(Component.ReviewModel).toConstantValue(ReviewModel);
reviewContainer.bind<Controller>(Component.ReviewController).to(ReviewController).inSingletonScope();
return reviewContainer;
}