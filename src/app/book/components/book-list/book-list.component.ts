import { Component } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../book";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books:Book[] = [];
  constructor(private bookService: BookService) {
    bookService.getAllBooks().subscribe(books => (
      this.books = books
    ));

    console.log("books: ".concat((this.books.map(x=>x.bookDetails.title + ' ').toString())));
  }
}
