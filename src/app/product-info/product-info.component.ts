import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NameServiceService } from '../services/name-service.service';
import { products } from './../products/products';
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  id = 0;
  detail: any = '';
  user = '';
  constructor(private route: ActivatedRoute, private ns: NameServiceService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.pid;
    console.log(this.id);
    this.detail = products.filter((product) => product.id == this.id)[0];
    console.log(this.detail);
    this.user = this.ns.uname;
  }

  testMethod(value) {}
}
