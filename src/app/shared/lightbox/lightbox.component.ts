import { Component, Input, OnInit } from '@angular/core';

import { Lightbox } from 'ngx-lightbox';
import { Product } from './../../products/product.model';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  @Input() productImages = [];

  album = [];
  constructor(private _lightbox: Lightbox) { }

  ngOnInit() {    
    this.productImages.forEach((PI: Product) => {
      const src = PI.imagePath;
      const caption = PI.name;
      const thumb = PI.imagePath;
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this.album.push(album);
    });

  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
