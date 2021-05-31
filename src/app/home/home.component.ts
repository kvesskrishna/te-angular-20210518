import { Component, OnInit } from '@angular/core';
import { NameServiceService } from '../services/name-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'talentelgia-angular';
  a: any = 0;
  b: any = 0;
  sum = 0;
  tcolor = 'red';
  today = new Date();
  username = '';

  blueText() {
    this.tcolor = 'blue';
  }
  constructor(private names: NameServiceService) {}

  ngOnInit(): void {
    this.a = 5;
    this.b = 7;
    this.updateSum();
    var title = 'some-angular';
    this.title = 'other-angular';
  }
  updateSum() {
    console.log('keyed up..');
    this.sum = parseInt(this.a) + parseInt(this.b);
  }
  setUser() {
    this.names.setName(this.username);
    alert('User name is set!');
  }
}
