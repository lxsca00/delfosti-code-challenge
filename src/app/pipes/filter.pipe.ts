import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg.length < 4) return value;

    const filteredProducts: any = [];
    for (const product of value) {
      if (product.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        filteredProducts.push(product);
      }
    }
    return filteredProducts;
  }
}
