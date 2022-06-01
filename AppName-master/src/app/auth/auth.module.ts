import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { AuthBaseComponent } from './auth-base/auth-base.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    SigninComponent,
    AuthBaseComponent,
    SignupComponent,
    PageNotFoundComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
