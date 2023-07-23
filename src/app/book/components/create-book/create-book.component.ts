import {Component} from '@angular/core';
import {BookService} from "../../services/book.service";
import {FormControl, FormGroup, } from "@angular/forms";
import {RedirectService} from "../../../services/redirect.service";
import {AuthorService} from "../../../author/services/author.service";
import {GenreService} from "../../../genre/services/genre.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {

  authorSelectList: {name: string, id: number}[] = [];
  genreSelectList: {name: string, id: number}[] = [];

  foundedAuthors: {name: string, id: number}[] = [];

  bookForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    fileData: new FormControl(),
    imageData: new FormControl(),
    length: new FormControl(0),
    yearOfBook: new FormControl(0),
    genresId: new FormControl([])
  });

  authorId: number = -1;

  searchAuthors(authorName: string) {
    this.foundedAuthors = this.authorSelectList
      .filter(value => value.name
        .toLowerCase()
        .includes(authorName.toLowerCase()));
  }

  selectAuthor(id: number) {
    this.authorId = id;
  }

  constructor(
    private bookService: BookService,
    private redirectService: RedirectService,
    private authorService: AuthorService,
    private genreService: GenreService) {
    authorService.getAllAuthors().subscribe(authors => {
      this.authorSelectList = authors;
    });
    genreService.getAllGenres().subscribe(genres => {
      this.genreSelectList = genres;
    });
  }

  parseData() : any {
    return {
      'bookDetails' : {
        'title' : this.bookForm.get('title')?.value,
        'description' : this.bookForm.get('description')?.value,
        'file' : btoa(this.bookForm.get('fileData')!.value),
        'image' : btoa(this.bookForm.get('imageData')!.value),
        'length' : this.bookForm.get('length')?.value,
        'yearOfBook' : this.bookForm.get('yearOfBook')?.value,
      },
      'authorId' : this.authorId,
      'genresId' : this.bookForm.get('genresId')?.value,
    };
  }

  onSubmit() {
    let book = this.parseData();
    this.bookService.createBook(book).subscribe(response => {
      console.log('response: ' + response);
    });

    this.redirectService.redirectToIndex();
  }

  protected readonly parseInt = parseInt;
}
