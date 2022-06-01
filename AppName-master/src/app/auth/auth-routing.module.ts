import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sign } from 'crypto';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'signin',
    pathMatch:'full'
  },
  {
    path:'',
    children:[
      {
        path:'signin',
        component:SigninComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
