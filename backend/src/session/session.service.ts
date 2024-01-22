import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

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
}
