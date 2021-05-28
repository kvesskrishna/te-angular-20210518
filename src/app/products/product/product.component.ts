import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() pdetail;
  @Output() changeQuantity = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  updateQuantity(action, id) {
    let data = { action: action, id: id };
    this.changeQuantity.emit(data);
  }
}
