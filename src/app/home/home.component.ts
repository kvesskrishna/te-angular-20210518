import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'talentelgia-angular';
  a = 5;
  b = 6;
  tcolor = 'red';
  today = new Date();

  blueText() {
    this.tcolor = 'blue';
  }
  constructor() {}

  ngOnInit(): void {}
}
