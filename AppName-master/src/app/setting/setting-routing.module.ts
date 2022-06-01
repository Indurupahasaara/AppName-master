import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'user-profile',
    pathMatch:'full'
  },
  {
    path:'',
    children:[
      {
        path:'user-profile',
        component:UserProfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
