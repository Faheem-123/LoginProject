import { NgModule } from '@angular/core';
import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginServiceService } from './login/login.service';
import { LoginComponent } from './login/login.component';
import { ShareModule } from '../share/share.module';
import { ActivateGuard } from './activate.guard';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginModuleRoutingModule,
    
    ShareModule
  ],
  providers:[LoginServiceService,ActivateGuard]
})
export class LoginModuleModule { 
  constructor(){
    console.log("login model loaded");
  }
}
