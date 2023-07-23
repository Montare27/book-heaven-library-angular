import { Injectable } from '@angular/core';
import {ApiProviderService} from "../../api-provider.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = "";
  constructor(private apiProvider: ApiProviderService, private http: HttpClient) {
    this.apiUrl = apiProvider.getAuthApiUrl();
  }

  register(user: any) : Observable<any>{
    return this.http.post(`${this.apiUrl}/Register`, user);
  }

  login(user: any) : Observable<any> {
    return this.http.post(`${this.apiUrl}/Login`, user);
  }

  signOut() : Observable<any> {
    return this.http.get(`${this.apiUrl}/SignOut`);
  }
}
