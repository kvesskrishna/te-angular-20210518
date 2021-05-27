import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() pdata;
  @Output() changeData = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  updateData() {
    this.changeData.emit(this.pdata);
  }
}
