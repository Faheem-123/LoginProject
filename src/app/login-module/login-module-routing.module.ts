import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../share/header/header.component';
import { ActivateGuard } from './activate.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent,
    children:[
      {
        path:'',
        component:LoginComponent,canActivate:[ActivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginModuleRoutingModule { }
