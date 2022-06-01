import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../auth/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'',
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'signup',
        component:SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
