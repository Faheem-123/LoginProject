import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'home',

    loadChildren: () => import('./home-module/home-module.module').then(m => m.HomeModuleModule)
  },
  {
    path:'login',
    loadChildren: () => import('./login-module/login-module.module').then(m => m.LoginModuleModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
