import { Component, OnInit } from '@angular/core';
import { products } from './products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  products = products;
  cartitems = 0;
  cartvalue = 0;
  cartproducts = [];
  ngOnInit(): void {}

  editProduct(e) {
    this.cartvalue = 0;
    // this.cartitems = 0;

    this.products.forEach((product) => {
      if (product.id == e.id) {
        if (e.action == 'add') {
          product.quantity = product.quantity + 1;
          if (product.quantity == 1) {
            this.cartproducts.push(product.id);
          }
        }
        if (e.action == 'rem' && product.quantity >= 1) {
          product.quantity = product.quantity - 1;
          if (product.quantity == 0) {
            // remove id from cartproducts array
          }
        }
      }
      this.cartvalue = this.cartvalue + product.quantity * product.price;
    });
    console.log(this.cartproducts);
  }
}
