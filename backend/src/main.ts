import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS設定
  const allowedOrigins: Array<string> = ['http://localhost:3000'];
  app.enableCors({
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    origin: allowedOrigins,
  });

  await app.listen(PORT);
}
bootstrap();
