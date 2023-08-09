import { Component } from '@angular/core';
import {CurrentUserService} from "./authentication/services/current-user.service";
import {UserService} from "./authentication/services/user.service";
import {ActivatedRoute, Navigation, Router} from "@angular/router";
import routes from "./routes";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    "app.component.css"
  ]
})
export class AppComponent {
  title = 'BookLibraryHeaven';
  isSigned: boolean = false

  word = new FormControl('');

  // word = string = '';
  username = '';
  constructor(
    private currentUserService: CurrentUserService,
    private userService: UserService,
    private router: Router
    ) {
    if(currentUserService.getName()){
      this.isSigned = true;
      this.username = this.currentUserService.getName()!;
    }
  }

  signOut() {
    this.userService.signOut();
    this.isSigned = false;
  }

  search() {
    this.router.navigate(['/book/list/', {word: this.word.value}])
  }

}
