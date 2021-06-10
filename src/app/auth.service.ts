import { Injectable } from '@angular/core';
import users from './users/users';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users = users;
  constructor() {}

  authUser(creds) {
    let status = { login: false, role: null, message: null };
    const user = users.filter((user) => user.email == creds.username);
    if (user.length == 0) {
      status.login = false;
      status.message = 'Invalid username';
      return status;
    }
    if (user[0].password != creds.password) {
      status.login = false;
      status.message = 'Invalid password';
      return status;
    }
    status.login = true;
    status.message = 'Login Success';
    status.role = user[0].role;
    return status;
  }
}
