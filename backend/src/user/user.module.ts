import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [FirebaseModule],
  providers: [UserService],
})
export class UserModule {}
