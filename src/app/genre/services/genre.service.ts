import { Injectable } from '@angular/core';
import {ApiProviderService} from "../../api-provider.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "../genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  apiUrl: string = "";

  constructor(
    private apiProvider: ApiProviderService,
    private httpService: HttpClient) {
    this.apiUrl = apiProvider.getGenreApiUrl();
  }

  getAllGenres(): Observable<Genre[]> {
    return this.httpService.get<Genre[]>(this.apiUrl + "/GetAllGenres/");
  }

  getGenreById(id: number) : Observable<Genre> {
    return this.httpService.get<Genre>(`${this.apiUrl}/GetGenreById/${id}`);
  }

  createGenre(genre: any) : Observable<any> {
    return this.httpService.post<any>(this.apiUrl + "/CreateGenre", genre);
  }

  updateGenre(genre: any) : Observable<any> {
    return this.httpService.put<any>(this.apiUrl + "/UpdateGenre", genre);
  }

  deleteGenre(id: number) : Observable<void> {
    return this.httpService.delete<void>(`${this.apiUrl}/DeleteGenre/${id}`);
  }
}
