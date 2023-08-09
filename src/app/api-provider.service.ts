import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiProviderService {
  private url: string = "http://localhost:5249/api";
  private authUrl: string = "http://localhost:5003/api";
  constructor() { }

  getBookApiUrl() : string {
    return this.url + "/Book";
  }

  getAuthorApiUrl() : string {
    return this.url + "/Author";
  }

  getGenreApiUrl() : string {
    return this.url + "/Genre";
  }

  getReviewApiUrl() : string {
    return this.url + "/Review";
  }

  getSaveListApiUrl() : string {
    return this.url + "/SaveList";
  }

  getAuthApiUrl() : string {
    return this.authUrl + "/Account";
  }

}
