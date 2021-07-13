import { RouterModule, Routes } from "@angular/router";

import { ContentComponent } from "./content/content.component";
import { NgModule } from "@angular/core";
import { NoContentComponent } from "./global/no-content/no-content.component";
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from "./user/user.component";

export const AppRoutes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'user/:pageState', component: UserComponent },
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: ':id/:pageState', component: UserComponent },
      { path: ':id/:pageState', component: UserComponent },
      { path: ':id/log-out', component: UserComponent },
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