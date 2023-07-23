import {Injectable} from '@angular/core';
import {Book} from "../book";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiProviderService} from "../../api-provider.service";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl: string = "";
  constructor(private apiProvider: ApiProviderService, private httpService: HttpClient) {
    this.apiUrl = apiProvider.getBookApiUrl();
  }

  getAllBooks(): Observable<Book[]> {
    return this.httpService.get<Book[]>(this.apiUrl + "/GetAllBooks/");
  }

  getBookById(id: number) : Observable<Book> {
    return this.httpService.get<Book>(`${this.apiUrl}/GetBookById/${id}`);
  }

  createBook(book: any) : Observable<any> {
    return this.httpService.post<any>(`${this.apiUrl}/CreateBook`, book);
  }

  updateBook(book: any) : Observable<any> {
    return this.httpService.put<any>(this.apiUrl + "/UpdateBook", book);
  }

  deleteBook(id: number) : Observable<void> {
    return this.httpService.delete<void>(`${this.apiUrl}/DeleteBook/${id}`);
  }
}
