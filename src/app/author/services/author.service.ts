import { Injectable } from '@angular/core';
import {ApiProviderService} from "../../api-provider.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  apiUrl: string = "";

  constructor(
    private apiProvider: ApiProviderService,
    private httpService: HttpClient) {
    this.apiUrl = apiProvider.getAuthorApiUrl();
  }

  getAllAuthors(): Observable<Author[]> {
    return this.httpService.get<Author[]>(this.apiUrl + "/GetAllAuthors/");
  }

  getAuthorById(id: number) : Observable<Author> {
    return this.httpService.get<Author>(`${this.apiUrl}/GetAuthorById/${id}`);
  }

  createAuthor(author: any) : Observable<any> {
    return this.httpService.post<any>(this.apiUrl + "/CreateAuthor", author);
  }

  updateAuthor(author: any) : Observable<any> {
    return this.httpService.put<any>(this.apiUrl + "/UpdateAuthor", author);
  }

  deleteAuthor(id: number) : Observable<void> {
    return this.httpService.delete<void>(`${this.apiUrl}/DeleteAuthor/${id}`);
  }
}
