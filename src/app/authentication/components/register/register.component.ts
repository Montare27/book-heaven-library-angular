import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {RedirectService} from "../../../services/redirect.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(
    private userService: UserService,
    private redirectService: RedirectService) {
  }

  parseData() : any {
    return {
      "userName" : this.registerForm.contains('userName'),
      "email" : this.registerForm.contains('userName'),
      "password" : this.registerForm.contains('userName'),
      "confirmPassword" : this.registerForm.contains('userName'),
    };
  }

  onSubmit() {
    let user = this.parseData();
    this.userService.register(user);

    this.redirectService.redirectToIndex();
  }
}
