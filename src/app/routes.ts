import {Routes} from "@angular/router";
import {BookListComponent} from "./book/components/book-list/book-list.component";
import {CreateBookComponent} from "./book/components/create-book/create-book.component";
import {BookDetailedComponent} from "./book/components/book-detailed/book-detailed.component";
import {UpdateBookComponent} from "./book/components/update-book/update-book.component";
import {LoginComponent} from "./authentication/components/login/login.component";

const routes: Routes = [
  {
    path : "",
    component: BookListComponent,
    title: "Book List"
  },
  {
    path : "book/list",
    component: BookListComponent,
    title: "Book List",
    pathMatch: "full"
  },
  {
    path : "book/list/:word",
    component: BookListComponent,
    title: "Book List",
    pathMatch: "full"
  },
  {
    path : "book/create",
    component: CreateBookComponent,
    title: "Create Book",
  },
  {
    path : "book/:id",
    component: BookDetailedComponent,
    title: "Book Details",
  },
  {
    path : "book/update/:id",
    component: UpdateBookComponent,
    title: "Update Book",
  },
  {
    path : "login",
    component: LoginComponent,
    title: "Login",
  },
];

export default routes;
