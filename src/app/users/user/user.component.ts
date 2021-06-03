import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _users: UsersService) {}
  info: any = '';
  ngOnInit(): void {
    let id = this._route.snapshot.params.id;
    // this.info = this._users.getUser(id);
    this._users.getUser(id).subscribe((data) => {
      let mdata: any = data;
      this.info = mdata;
    });
  }
}
