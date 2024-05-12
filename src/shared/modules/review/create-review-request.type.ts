import { Request } from 'express';
import { RequestBody, RequestParams } from '../../libs/rest/index.js';
import { ReviewDto } from './dto/create-review.dto.js';

export type CreateReviewRequest = Request<RequestParams, RequestBody, ReviewDto>;