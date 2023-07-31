import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BooksModule } from './Book/book.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.select(BooksModule);
  await app.listen(3000);
}
bootstrap();
