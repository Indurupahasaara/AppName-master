import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthBaseComponent } from './auth/auth-base/auth-base.component';
import { PageNotFoundComponent } from './auth/errors/page-not-found/page-not-found.component';
import { HomeBaseComponent } from './home/components/home-base/home-base.component';

const routes: Routes = [
{
  path:'',
  component:AuthBaseComponent,
  children:[
    {
      path:'',
      redirectTo:'auth',
      pathMatch:'full'
    },
    {
      path:'auth',
      loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
    }
  ]
},
{
  path:'',
  component:HomeBaseComponent,
  children:[
    {
      path:'',
      redirectTo:'home',
      pathMatch:'full'
    },
    {
      path:'home',
      loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path:'setting',
      loadChildren: ( ) => import('./setting/setting.module').then(m => m.SettingModule)
    }
  ]
},
{
  path:'""',
 component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
