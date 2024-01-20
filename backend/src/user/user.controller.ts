import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // サインアップ
  @Post('/create')
  async userSignUp(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('uid') uid: string,
  ): Promise<string> {
    return await this.userService.userSignup(email, password, uid);
  }

  @Post('/signin')
  async userSignIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<string> {
    return await this.userService.userSignIn(email, password);
  }
}
