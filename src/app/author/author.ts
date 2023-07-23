import {Book} from "../book/book";

export interface Author {
  id: number;
  name: string;
  books: Book[];
}
