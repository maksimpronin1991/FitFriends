import { Container } from "inversify";
import { ReviewService } from "./review-service.interface.js";
import { Component } from "../../types/component.enum.js";
import { DefaultReviewService } from "./default-review.service.js";

export function createReviewContainer() {
const reviewContainer = new Container();
reviewContainer.bind<ReviewService>(Component.ReviewService).to(DefaultReviewService).inSingletonScope();
return reviewContainer;
}