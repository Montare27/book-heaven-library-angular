import { Component } from '@angular/core';
import {CurrentUserService} from "./authentication/services/current-user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookLibraryHeaven';
  isSigned: boolean = false
  username = '';
  constructor(
    private currentUserService: CurrentUserService) {
    if(currentUserService.getName()){
      this.isSigned = true;
      this.username = this.currentUserService.getName()!;
    }
  }

  signOut() {
    this.isSigned = false;
  }
}
