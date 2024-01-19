import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // ユーザーデータ作成
  @Post('/create')
  async createUserData(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('uid') uid: string,
  ): Promise<string> {
    return await this.userService.createUserData(email, password, uid);
  }
}
