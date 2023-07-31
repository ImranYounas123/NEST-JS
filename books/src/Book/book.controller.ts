import { BookService } from "./book.service";
import { Body, Get, Post, Controller, HttpStatus, HttpException, Res, Delete, Param, Put } from "@nestjs/common"
import { Book } from "./interface/book.interface";
import { CreateBookDto } from "./dto/create-book.dto";
import { Response } from 'express';
// Controllers are responsible for handling incoming requests, interacting with the client, and validating the data before processing it further.

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Get()
    async findAll(): Promise<Book[]> {
        if (this.bookService.findAll().length == 0) {
            throw new HttpException('No data found', HttpStatus.NOT_FOUND);
        }
        return this.bookService.findAll();
    }
    @Get(":ISBN")
    async findOne(@Param("ISBN") ISBN: String): Promise<Book> {
        const data = this.bookService.getBookByISBN(ISBN)
        if (!data) {
            throw new HttpException('No data found', HttpStatus.NOT_FOUND);
        }
        return this.bookService.getBookByISBN(ISBN)
    }
    @Post()
    async create(@Body() CreateBookDto: CreateBookDto, @Res() response: Response) {
        try {
            // if you want to access a specific property like name from the req.body, you should directly access it from the CreateBookDto object. The CreateBookDto instance represents the entire request body, and you can access its properties directly.
            this.bookService.create(CreateBookDto);
            response.status(HttpStatus.OK).json({ message: 'Book created successfully!' });
        } catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to create book.' });
        }
    }
    @Delete(":id")
    async deleteBook(@Param('id') id: number, @Res() response: Response) {
        try {
            this.bookService.deleteBook(id);
            response.status(HttpStatus.OK).json({ message: 'Book deleted successfully!' });
        } catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to delete book.' });
        }
    }
    @Put(":id")
    async updateBook(@Param('id') id: number, @Body() CreateBookDto: CreateBookDto, @Res() response: Response) {
        try {
            this.bookService.updateData(id, CreateBookDto)
            response.status(HttpStatus.OK).json({ message: 'Book Update successfully!' });
        } catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to Update book.' });
        }
    }
}