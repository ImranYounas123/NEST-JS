import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { Global, Module } from "@nestjs/common"

@Global()
@Module({
    controllers: [BookController],
    providers: [BookService],
})
export class BooksModule { }

// The @Global() decorator is used to mark a module as global, which means that it can be imported by any other module in the application.
//  This is useful when you want to create a module that can be used across multiple modules in the application.
//  For example, the BookModule can be imported by any other module in the application to use the BookService and BookController classes.

