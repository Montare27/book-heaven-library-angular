import {Component} from '@angular/core';
import {BookService} from "../../services/book.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RedirectService} from "../../../services/redirect.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  id:number = -1;
  bookForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    file: new FormControl(''),
    image: new FormControl(''),
    length: new FormControl(0),
    authorId: new FormControl(0),
    yearOfBook: new FormControl(0),
    genresId: new FormControl([])
  });

  constructor(
    private bookService: BookService,
    private route:ActivatedRoute,
    private redirectService: RedirectService) {
    this.id = parseInt(route.snapshot.params['id']);
  }

  parseData() : any {
    return {
      'id': this.id,
      'bookDetails' : {
        'title' : this.bookForm.contains('title'),
        'description' : this.bookForm.contains('description'),
        'file' : this.bookForm.contains('file'),
        'image' : this.bookForm.contains('image'),
        'length' : this.bookForm.contains('length'),
        'yearOfBook' : this.bookForm.contains('yearOfBook'),
      },
      'authorId' : this.bookForm.contains('authorId'),
      'genresId' : this.bookForm.contains('genresId'),
    };
  }

  onSubmit() {
    let book = this.parseData();
    this.bookService.updateBook(book);

    this.redirectService.redirectToIndex();
  }
}
