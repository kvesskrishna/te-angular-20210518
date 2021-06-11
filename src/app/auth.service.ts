import { Injectable } from '@angular/core';
import users from './users/users';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users = users;
  status: any = null;
  constructor() {}

  authUser(creds) {
    let status = { login: false, role: null, message: null, name: null };
    const user = users.filter((user) => user.email == creds.username);
    if (user.length == 0) {
      status.login = false;
      status.message = 'Invalid username';
    } else if (user[0].password != creds.password) {
      status.login = false;
      status.message = 'Invalid password';
    } else {
      status.login = true;
      status.message = 'Login Success';
      status.role = user[0].role;
      status.name = user[0].name;
    }
    this.status = status;
    return status;
  }
}
