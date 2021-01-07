import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../share/header/header.component';
import { DeactivateGuard } from './deactivate.guard';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {
    path:'',
    component:HeaderComponent,
    children:[
      {
        path:'',
        component:HomeComponent,canDeactivate:[DeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
