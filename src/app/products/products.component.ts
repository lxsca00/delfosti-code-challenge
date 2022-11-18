import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
  
  path: string = "../../assets"

  products = PRODUCTS

  constructor(){}
  ngOnInit(): void {
    
  }
}

