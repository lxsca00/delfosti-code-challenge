import { Component, OnInit } from '@angular/core';
import { Product } from '../products.interfaces';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  path: string = '../../assets';

  products!: Product[];

  public page!: number ;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => (this.products = res));
  }
}
