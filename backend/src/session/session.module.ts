import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [SessionController],
  imports: [
    JwtModule.register({
      secret: 'secret-key',
      signOptions: { expiresIn: '1w' },
    }),
  ],
  providers: [SessionService],
})
export class SessionModule {}
