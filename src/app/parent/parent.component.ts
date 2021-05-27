import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  data = 'parent data';
  ngOnInit(): void {}
  onChildChange(e) {
    console.log(e);
    this.data = e;
  }
}
