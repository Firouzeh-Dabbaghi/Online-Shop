import * as jQuery from 'jquery';

import { Component } from '@angular/core';
import { ProductsService } from './../products/products.service';

@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ContentComponent {
  mostVisited = [];
  latestVisited = [];
  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.mostVisited = this.productsService.getProductImagesUrl();
    this.latestVisited = this.productsService.getProducts();
  }

}
