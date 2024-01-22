import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { SessionModule } from 'src/session/session.module';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [FirebaseModule, SessionModule],
  providers: [UserService],
})
export class UserModule {}
