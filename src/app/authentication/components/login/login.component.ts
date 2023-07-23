import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {CurrentUserService} from "../../services/current-user.service";
import {RedirectService} from "../../../services/redirect.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false),
  });

  constructor(
    private userService: UserService,
    private currentUserService: CurrentUserService,
    private redirectService: RedirectService) {
  }

  parseData() : any {
    return {
      "userName" : this.registerForm.get('userName')!.value,
      "password" : this.registerForm.get('password')!.value,
      "rememberMe" : this.registerForm.get('rememberMe')!.value,
    };
  }

  onSubmit() {
    let user = this.parseData();
    this.userService.login(user).subscribe((response) => {
      this.currentUserService.setName(response.username);
      this.currentUserService.setRoles(response.roles);
    });

    this.redirectService.redirectToIndex();
  }
}
