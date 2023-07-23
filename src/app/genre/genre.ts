import {Book} from "../book/book";

export interface Genre {
  id: number;
  name: string;
  books: Book[];
}
