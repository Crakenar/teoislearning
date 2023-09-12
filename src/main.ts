import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // possible to use {whitelist: true} for exceeding params on request
  // transform can just be activated on specific routes using @UsePipes(new ValidationPipe({transform: true}))
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  await app.listen(3000);
}
bootstrap();
