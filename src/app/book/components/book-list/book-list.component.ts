import { Component } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Author, Book, Genre} from "../../book";
import {AuthorService} from "../../../author/services/author.service";
import {GenreService} from "../../../genre/services/genre.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [
    "book-list.component.css"
  ]
})
export class BookListComponent {
  word:string = '';

  allBooks:Book[] = [];
  books: Book[] = [];

  genres: {id: number, name:string}[] = [];
  authors: {id: number, name:string}[] = [];

  selectedGenreId: number = -1;
  selectedAuthorId: number = -1;

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private genreService:GenreService,
    private route: ActivatedRoute)
  {

    this.word = route.snapshot.params['word'].toLowerCase();

    bookService.getAllBooks().subscribe(books => {
      this.allBooks = books;
      // if(this.word == undefined)
      //   console.log("Word is undefined");
      // else
      //   console.log("word: " + this.word);
      this.books = (this.word == undefined || this.word == null) ? this.allBooks : this.allBooks.filter(x=>
        x.bookDetails.title.toLowerCase().indexOf(this.word) != -1);
    });
    authorService.getAllAuthors().subscribe(authors => (
      this.authors = authors
    ));
    genreService.getAllGenres().subscribe(genres=>(
      this.genres = genres
    ));
  }

  filter() {
    this.books = this.allBooks;

    if(this.selectedGenreId != -1 )
    {
      this.books = this.books.filter(x=>
        x.genres.find(x=>x.id == this.selectedGenreId));
    }

    if( this.selectedAuthorId != -1)
    {
      console.log("forth")
      this.books = this.books.filter(x=>
        x.author.id == this.selectedAuthorId);
    }
  }
}
