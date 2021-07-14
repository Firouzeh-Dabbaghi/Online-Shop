import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Lightbox } from 'ngx-lightbox';
import { Product } from './../../products/product.model';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  @Input() productImages = [];
  isUserLoggin;
  sub: Subscription;
  album = [];
  constructor(
    private _lightbox: Lightbox,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.productImages.forEach((PI: Product) => {
      const src = PI.imagePath;
      const caption = PI.name;
      const description = PI.description;
      const album = {
        src: src,
        caption: caption,
        description: description
      };
      this.album.push(album);
    });

  }

  // open lightbox
  open(index: number): void {
    this._lightbox.open(this.album, index);
  }

  // close lightbox programmatically
  close(): void {
    this._lightbox.close();
  }

  onAddToBasket() {
    this.chkuserLogin();
    if (!this.isUserLoggin) {
      alert('You must be logged in to add a product to your cart.')
      this.router.navigate(['/log-in']);
    }
  }

  chkuserLogin() {
    this.sub = this.userService.currentUser.subscribe(
      x => {
        if (x.id)
          this.isUserLoggin = true;
        else
          this.isUserLoggin = false;
      }
    );
    // this.sub.unsubscribe();
  }
}
