import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
  
  path: string = "../../assets"

  products : Product[] |undefined

  getProducts(){
    this.products = this.productService.getProducts()
  }

  constructor( private productService: ProductService){}
  ngOnInit(): void {
    this.getProducts()
  }
}

