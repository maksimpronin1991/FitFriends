import { Request } from 'express';
import { RequestBody, RequestParams } from '../../libs/rest/index.js';
import {CreateTrainingDto} from "./dto/create-training.dto.js";

export type CreateTrainingRequest = Request<RequestParams, RequestBody, CreateTrainingDto>;