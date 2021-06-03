import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private _users: UsersService) {}
  users: any = [];
  ngOnInit(): void {
    this._users.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
