export interface Book {
  id: number;
  bookDetails: BookDetails;
  author: AuthorDto;
  genres: GenreDto[],
  reviews: Review[],
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

export interface AuthorDto {
  id: string;
  name: string;
}

export interface GenreDto {
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
