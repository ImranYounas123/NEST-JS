import { Injectable } from "@nestjs/common"
import { Book } from "./interface/book.interface"

// 1. services
// 2. controllers
// 3. modules
@Injectable()
// @Injectable() decorator is used to mark a class as a service. Services are a fundamental building block of NestJS applications and 
//  are used to encapsulate business logic, data access, and other functionalities that can be shared across different parts of the application.
// When you use the @Injectable() decorator on a class, you are telling NestJS that this class can be injected as a dependency into other 
// classes. Dependency injection is a design pattern that helps manage the dependencies between different parts of an application. 
// By using dependency injection, you can decouple the components of your application, making it more modular, testable, and maintainable.
export class BookService {
    // he private keyword indicates that this property is only accessible within the scope of the class where it is defined and cannot be accessed from outside the class.
    // readonly: This keyword indicates that the books property can only be assigned a value once during its initialization, and after that, it cannot be changed. It provides immutability to the property, ensuring that its value remains constant after it is initialized
    private readonly books: Book[] = []

    create(book: Book) {
        this.books.push(book)
    }
    //  The findAll() method returns the books array. This method will be used by the BooksController to retrieve all the books from the books array.
    findAll(): Book[] {
        return this.books
    }
    getBookByISBN(ISBN: String) {
        const data = this.books.find(book => book.ISBN == ISBN)
        return data;
    }
    deleteBook(id: number) {
        const bookIndex = this.books.findIndex(book => book.id == id)
        console.log(Boolean(bookIndex))
        if (bookIndex >= 0) {
            this.books.splice(bookIndex, 1);
        }
    }
    // A partial type means that all properties of the original type become optional, meaning they can be present or omitted in the resulting partial type.
    updateData(id: number, updatedData: Partial<Book>): Book | null {
        const findIndex = this.books.findIndex(book => book.id == id)
        if (findIndex >= 0) {
            this.books[findIndex] = {
                ...this.books[findIndex],
                ...updatedData
            }
            return this.books[findIndex]
        }
        return null
    }
}