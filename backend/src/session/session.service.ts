import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

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
}
