import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // ユーザーデータ作成
  @Post('/create')
  async createUserData(
    @Body('uid') uid: string,
    @Body('email') email: string,
  ): Promise<string> {
    return await this.userService.createUserData(uid, email);
  }
}
