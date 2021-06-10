import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {}

  loggedUser: any = null;
  // loggedIn = '';
  // loggedRole = '';
  loginError = null;

  ngOnInit(): void {}
  submitHandler(form) {
    console.log(form.value);
    const credentials = form.value;
    this.loggedUser = this._auth.authUser(credentials);
    console.log(this.loggedUser);
    if (!this.loggedUser.login) {
      this.loginError = this.loggedUser.message;
    } else {
      this.loginError = null;
    }
    if (this.loggedUser.role == 'admin') {
      this._router.navigate(['/admin']);
    }
    if (this.loggedUser.role == 'user') {
      this._router.navigate(['/visitor']);
    }
  }
}
