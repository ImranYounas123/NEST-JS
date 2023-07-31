import { Module } from '@nestjs/common';
import { BooksModule } from './Book/book.module'; // Provide the correct path

@Module({
  imports: [BooksModule],
})
export class AppModule { }
