import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from "./services/book.service";
import { CreateBookComponent } from './components/create-book/create-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookDetailedComponent} from "./components/book-detailed/book-detailed.component";
import {BookListComponent} from "./components/book-list/book-list.component";
import {RouterModule} from "@angular/router";
import routes from "../routes";
import {BrowserModule} from "@angular/platform-browser";
import {AppModule} from "../app.module";


@NgModule({
  declarations: [
    BookListComponent,
    CreateBookComponent,
    BookDetailedComponent,
    UpdateBookComponent,
  ],
  providers: [
    BookService
  ],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forChild(routes),
  ],
  bootstrap:[

  ],
  exports: [
    // RouterModule
  ],
})
export class BookModule { }
