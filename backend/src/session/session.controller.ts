import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  @Get('/verify')
  async verifyToken(@Req() req: Request) {
    const token = req.cookies['authorization'];
    if (!token) {
      throw new HttpException('No token provided', HttpStatus.BAD_REQUEST);
    }

    try {
      const decoded = await this.sessionService.verifyToken(token);
      return { vaild: true, uid: decoded.uid };
    } catch (err) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
