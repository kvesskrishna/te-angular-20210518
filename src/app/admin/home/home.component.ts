import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // console.log(this.auth.status);
    // if (!this.auth.status.login || this.auth.status.role != 'admin') {
    //   this.router.navigate(['../login']);
    // }
  }
}
