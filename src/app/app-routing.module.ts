import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SigninComponent} from "./user/signin/signin.component";
import {SignupComponent} from "./user/signup/signup.component";


const routes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
