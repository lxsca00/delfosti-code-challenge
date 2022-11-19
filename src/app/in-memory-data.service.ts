import { getLocaleId } from '@angular/common';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Product } from './products.interfaces';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {_id: 1, name: "Sandwich", slug: "/sandwich.png"},
    {_id: 2, name: "Café", slug: "/coffee.png" },
    {_id: 3, name: "Latte", slug: "/latte.png" },
    {_id: 4, name: "Papas fritas", slug: "/chips.png" },
    {_id: 5, name: "Manzana", slug: "/apple.png" },
    {_id: 6, name: "Pretzel", slug: "/pretzel.png" },
    {_id: 7, name: "Chocolate", slug: "/chocolate.png"},
    {_id: 8, name: "Hot dog", slug: "/hot-dog.png" },
    {_id: 9, name: "Galletas", slug: "/cookies.png" },
    {_id: 10, name: "Wrap de pollo", slug: "/wrap.png" },
    {_id: 11, name: "Taco", slug: "/taco.png" },
    {_id: 12, name: "Brezel", slug: "/brezel.png" },
    {_id: 13, name: "Ositos de goma", slug: "/gummy.png"},
    {_id: 14, name: "Macaron", slug: "/macaron.png" },
    {_id: 15, name: "Coca cola", slug: "/cola.png" },
    {_id: 16, name: "Chocolate blanco", slug: "/chocolate-white.png" },
    {_id: 17, name: "Hamburguesa", slug: "/hamburger.png" },
    {_id: 18, name: "Pecanas", slug: "/pecan.png" },
    {_id: 19, name: "Cashews", slug: "/cashew.png" },
    {_id: 20, name: "Leche de avena", slug: "/oat-milk.png" }
    ]
    return { products };
  }
  getId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product._id)) +1 : 11
  };
}
