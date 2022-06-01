import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeBaseComponent } from './components/home-base/home-base.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeBaseComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
