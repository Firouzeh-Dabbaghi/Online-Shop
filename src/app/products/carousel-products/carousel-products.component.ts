import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../products.service';

@Component({
  selector: 'app-carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.css']
})
export class CarouselProductsComponent implements OnInit {
  imageUrlArray = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.imageUrlArray = this.productsService.getProductImagesUrl();
  }

}
