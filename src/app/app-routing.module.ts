import { RouterModule, Routes } from "@angular/router";

import { ContentComponent } from "./content/content.component";
import { NgModule } from "@angular/core";
import { NoContentComponent } from "./global/no-content/no-content.component";
import { SignUpComponent } from './user/sign-up/sign-up.component';

export const AppRoutes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'sign-up',  component: SignUpComponent },
    { path: '**', component: NoContentComponent }
  ];

  @NgModule({
      imports:[RouterModule.forRoot(AppRoutes, { useHash: true })],
      exports:[RouterModule]
  })
  
export class AppRoutingModule{

}