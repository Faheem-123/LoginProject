import { NgModule } from '@angular/core';


import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home/home.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
 
    HomeModuleRoutingModule,
    ShareModule
  ]
})
export class HomeModuleModule { 
  constructor(){
    console.log("home module loaded");
  }
}

