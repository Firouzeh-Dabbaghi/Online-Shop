import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { FontAwesomeDirective } from 'ng2-fontawesome';
import { Footer } from './global/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LightboxComponent } from './shared/lightbox/lightbox.component';
import { LightboxModule } from 'ngx-lightbox';
import { NgModule } from '@angular/core';
import { NoContentComponent } from './global/no-content/no-content.component';
import { ProductsService } from './products/products.service';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TopNavBarComponent } from './menu/top-nav-bar/top-nav-bar.component';

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
    LightboxComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlideshowModule,
    LightboxModule,
    AppRoutingModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
