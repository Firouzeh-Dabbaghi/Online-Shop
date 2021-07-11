import * as jQuery from 'jquery';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselProductsComponent } from './products/carousel-products/carousel-products.component';
import { ContentComponent } from './content/content.component';
import { FontAwesomeDirective } from 'ng2-fontawesome';
import { Footer } from './global/footer/footer.component';
import { NgModule } from '@angular/core';
import { NoContentComponent } from './global/no-content/no-content.component';
import { ProductsService } from './products/products.service';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TopNavBarComponent } from './menu/top-nav-bar/top-nav-bar.component';

export const AppRoutes2: Routes = [
  { path: '', component: ContentComponent },
  /*{ path: 'inbox',  component: Inbox },
  { path: 'about', component: About },*/
  { path: '**', component: NoContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NoContentComponent,
    ContentComponent,
    TopNavBarComponent,
    FontAwesomeDirective,
    Footer,
    CarouselProductsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes2, { useHash: true }),
    SlideshowModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
