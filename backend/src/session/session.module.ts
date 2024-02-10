import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { FirebaseService } from 'src/firebase/firebase.service';

require('dotenv').config();

@Module({
  controllers: [SessionController],
  exports: [SessionService],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [FirebaseService, SessionService, UserService],
})
export class SessionModule {}
