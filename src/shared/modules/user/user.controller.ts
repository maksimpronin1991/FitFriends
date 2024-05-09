import { inject, injectable } from "inversify";
import { BaseController, HttpError, HttpMethod } from "../../libs/rest/index.js";
import { Component } from "../../types/component.enum.js";
import { Logger } from "../../libs/logger/logger.interface.js";
import { CreateUserRequest } from "./create-user-request.type.js";
import { Request,Response } from "express";
import { UserService } from "./user-service.interface.js";
import { RestSchema, Config } from "../../libs/config/index.js";
import { StatusCodes } from "http-status-codes";
import { fillDTO } from "../../helpers/common.js";
import { CreateUserRdo } from "./rdo/user.rdo.js";
import { LoginUserRequest } from "./login-user-request.type.js";


@injectable()
export class UserController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.UserService) private readonly userService: UserService,
    @inject(Component.Config) private readonly configService: Config<RestSchema>,
  ) {
    super(logger);
    this.logger.info('Register routes for UserController');

    this.addRoute({ path: '/register', method: HttpMethod.Post, handler: this.create });
    this.addRoute({ path: '/login', method: HttpMethod.Post, handler: this.login });
    this.addRoute({ path: '/info/:id', method: HttpMethod.Get, handler: this.getUserInfo });
    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.getUsers });
    this.addRoute({ path: '/:id', method: HttpMethod.Put, handler: this.updateUser });
  
  }

  public async create(
    { body }: CreateUserRequest,
    res: Response,
  ): Promise<void> {
    const existsUser = await this.userService.findByEmail(body.email);

    if (existsUser) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `User with email «${body.email}» exists.`,
        'UserController'
      );
    }

    const result = await this.userService.create(
      body, this.configService.get('SALT'));
      this.created(res,fillDTO(CreateUserRdo, result))
  }

  public async login(
    { body }: LoginUserRequest,
    _res: Response,
  ): Promise<void> {
    const existsUser = await this.userService.findByEmail(body.email);

    if (! existsUser) {
      throw new HttpError(
        StatusCodes.UNAUTHORIZED,
        `User with email ${body.email} not found.`,
        'UserController',
      );
    }

    throw new HttpError(
      StatusCodes.NOT_IMPLEMENTED,
      'Not implemented',
      'UserController',
    );
  }

  public async getUserInfo(_req: Request, res: Response){
    const user = await this.userService.findById(_req.params.id);

    this.ok(res, user);
  }

  public async updateUser(
   {params, body}: Request,
   res: Response
  ){
    const user = await this.userService.update(params.id, body);

    this.ok(res, user);
  }

  public async getUsers(
    _req: Request,
    res: Response
  ){
    const users = await this.userService.find();

    this.ok(res, fillDTO(CreateUserRdo, users));
  }
}