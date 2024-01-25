import {
  Controller,
  Get,
  Headers,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  @Get('/verify')
  async verifyToken(@Headers('authorization') token: string) {
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
