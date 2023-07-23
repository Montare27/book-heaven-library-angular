import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {CommonModule} from "@angular/common";
import {ApiProviderService} from "./api-provider.service";
import {BookModule} from "./book/book.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtHttpInterceptor} from "./authentication/interceprors/jwt-http-interceptor.service";
import {AuthenticationModule} from "./authentication/authentication.module";
import {GenreModule} from "./genre/genre.module";
import {AuthorModule} from "./author/author.module";
import {ReviewModule} from "./review/review.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BookModule,
    AuthenticationModule,
    GenreModule,
    AuthorModule,
    ReviewModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtHttpInterceptor,
      multi: true,
    },
    ApiProviderService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
