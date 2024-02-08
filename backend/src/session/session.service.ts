import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

interface TokenPayload {
  uid: string;
}

@Injectable()
export class SessionService {
  constructor(private jwtService: JwtService) {}

  /**
   * トークン生成
   * @param uid
   */
  async createToken(uid: string): Promise<string> {
    const payload = { uid };
    return this.jwtService.sign(payload);
  }

  /**
   * トークン検証
   * @param token
   */
  async verifyToken(token: string): Promise<TokenPayload> {
    try {
      return this.jwtService.verify(token);
    } catch (err) {
      throw new Error('Invalid token');
    }
  }

  /**
   * リクエストからトークンを検証
   * @param req
   */
  async verifyTokenFromRequest(req: Request): Promise<any> {
    const token = req.cookies['authorization'];
    if (!token) {
      throw new HttpException('No token provided', HttpStatus.BAD_REQUEST);
    }
    return this.verifyToken(token);
  }
}
