import { Component, OnInit } from '@angular/core';
import { Product } from '../products.interfaces';
//import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  path: string = '../../assets';

  products!: Product[];

  public page!: number;

  private productsUrl = 'http://localhost:3000/products';

  filterProducts = '';

  ngOnInit(): void {
    //this.productService.getProducts().subscribe((res) => (this.products = res));
    fetch(this.productsUrl)
      .then((response) => response.json())
      .then((response) => {
        this.products = response;
      });
  }
}
