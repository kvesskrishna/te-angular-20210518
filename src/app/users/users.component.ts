import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private _users: UsersService) {}
  users: any = [];
  showForm = false;
  // id = '';
  // name = ''
  // email='';
  // phone = '';
  ngOnInit(): void {
    this._users.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
  displayForm() {
    this.showForm = true;
  }
  submitHandler(data) {
    if(data.invalid) {
      alert('Please fix the form fields before you submit')
      return;
    }
    console.log('submitHandler called..', data)
    const formData = data.value;
    this.users.push(formData)
    // this.http.post('post api uri', formData).subscribe(data=>{
    //   error: 
    //   console.log(data.id)
    // })
    // this._users.postUser(formData).subscribe(data => {
    //   console.log(data)
    // })
  }
}
