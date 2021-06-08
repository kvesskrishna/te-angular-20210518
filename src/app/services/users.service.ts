import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import users from '../users/users';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) {}
  getUsers() {
    // return users;
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(id) {
    // let user = users.filter((user) => user.id == id);
    // return user;
    return this._http.get('https://jsonplaceholder.typicode.com/users/' + id);
    // let obs = this.getUsers().subscribe((data) => {
    //   let ldata: any = data;
    //   filtered = ldata.filter((user) => user.id == id);
    // });
    // console.log(filtered);

    // return filtered;
  }
  postUser(formdata) {
  return this._http.post('https://jsonplaceholder', formdata);
  }
}
