import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { FontAwesomeDirective } from 'ng2-fontawesome';
import { Footer } from './global/footer/footer.component';
import { LightboxComponent } from './shared/lightbox/lightbox.component';
import { LightboxModule } from 'ngx-lightbox';
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
    CarouselComponent,
    LightboxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes2, { useHash: true }),
    SlideshowModule,
    LightboxModule ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
