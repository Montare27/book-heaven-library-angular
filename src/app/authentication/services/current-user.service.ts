import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  constructor() {}

  getName() : string | null{
    return localStorage.getItem('username');
  }

  setName(username: string){
    localStorage.setItem('username', username);
  }

  setRoles(roles: string[]) {
    if(!roles)
      console.log('roles is undefined');
    else
      localStorage.setItem('roles', roles.toString());
  }

  getRoles() : string[] {
    let roles_str = localStorage.getItem('roles');
    return roles_str ? roles_str.split(',') :  [];
  }
}
