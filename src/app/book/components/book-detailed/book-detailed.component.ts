import {Component} from '@angular/core';
import {Book} from "../../book";
import {BookService} from "../../services/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-detailed',
  templateUrl: './book-detailed.component.html',
  styleUrls: ['./book-detailed.component.css']
})
export class BookDetailedComponent {
  book: Book = null!;
  id: number = -1;

  constructor(private bookService: BookService, private route:ActivatedRoute ) {
    this.id = parseInt(route.snapshot.params['id'], 10);
    bookService.getBookById(this.id).subscribe( (book) => {
        this.book = book;
      });

    console.log("id:" + this.id)
  }
  deleteBook() {
    this.bookService.deleteBook(this.id);
  }

  getGenreString() : string {
    return this.book.genres.map(x=>x.name).join(', ');
  }
}
