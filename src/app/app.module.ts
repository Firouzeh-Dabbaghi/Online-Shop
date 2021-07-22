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
import { ProfileComponent } from './user/profile/profile.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TopNavBarComponent } from './menu/top-nav-bar/top-nav-bar.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { LogOutComponent } from './user/log-out/log-out.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { FilterPipe } from './shared/pipe/filter.pipe';

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
    UserComponent,
    ProfileComponent,
    LogOutComponent,
    LogInComponent,
    AllProductsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlideshowModule,
    LightboxModule,
    AppRoutingModule],
  providers: [ProductsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
