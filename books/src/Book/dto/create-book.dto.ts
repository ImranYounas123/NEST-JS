// create dtos for each of the entities
export class CreateBookDto {
    readonly id: number;
    readonly title: String;
    readonly pages: Number;
    readonly ISBN: String;
    readonly authors: String[];
    readonly publisher: String;
    readonly publishedDate: Date;
    readonly language: String;
    readonly categories: String[];
    readonly image: String;
    readonly link: String;
    readonly description: String;
}


// Controllers are responsible for handling incoming requests, interacting with the client, and validating the data before processing it further.
// When handling incoming data, it's common to use DTOs to define the structure of the data sent by the client in the request payload.
// DTOs allow you to validate and transform the incoming data to ensure it adheres to the expected format before passing it to the service layer.
// By using DTOs in controllers, you are focused on the data transfer and data validation aspects.