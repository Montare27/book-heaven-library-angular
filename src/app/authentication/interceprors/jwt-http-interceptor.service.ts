import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtHttpInterceptor implements HttpInterceptor{

  private getLocalStorage(name: string) : string {
    return localStorage.getItem(name) ?? "";
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getLocalStorage('token');

    let clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });

    return next.handle(clonedRequest);
  }
}
