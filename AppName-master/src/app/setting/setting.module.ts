import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminPrifileComponent } from './components/admin-prifile/admin-prifile.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    AdminPrifileComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
