import { RouterModule, Routes } from '@angular/router';

import { AllProductsComponent } from './products/all-products/all-products.component';
import { ContentComponent } from './content/content.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { LogOutComponent } from './user/log-out/log-out.component';
import { NgModule } from '@angular/core';
import { NoContentComponent } from './global/no-content/no-content.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';

export const AppRoutes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'all-product', component: AllProductsComponent },
  { path: 'user/:pageState', component: UserComponent },
  { path: 'log-in', component: LogInComponent },
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: ':id/:pageState', component: UserComponent },
      { path: ':id/:pageState', component: UserComponent },
      { path: 'log-out', component: LogOutComponent },
      { path: ':id/orders', component: UserComponent },
    ]
  },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
