export interface Book {
  id: number;
  bookDetails: BookDetails;
  author: Author;
  genres: Genre[],
  reviews: Review[],
  publisherId: string;
}

export interface BookDetails {
  yearOfBook:number;
  title: string;
  description: string;
  length: number;
  image: string;
  file: string;
  publisherId: string;
  rating: number;
}

export interface Author {
  id: number;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Review {
  id: number;
  text: string;
  userId: string;
  evaluation: string;
  bookId: number;
}
