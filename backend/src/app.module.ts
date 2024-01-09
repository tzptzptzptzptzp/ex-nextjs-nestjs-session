import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FirebaseModule } from './firebase/firebase.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [UserModule, FirebaseModule, SessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
