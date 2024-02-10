import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

import { SessionService } from './session.service';
import { UserService } from 'src/user/user.service';

@Controller('session')
export class SessionController {
  constructor(
    private sessionService: SessionService,
    private userService: UserService,
  ) {}

  @Get('/verify')
  async verifyToken(@Req() req: Request) {
    try {
      const decoded = await this.sessionService.verifyTokenFromRequest(req);
      const user = await this.userService.findUserByUid(decoded.uid);
      return { vaild: true, user };
    } catch (err) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
