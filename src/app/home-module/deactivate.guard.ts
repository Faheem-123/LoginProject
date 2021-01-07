import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { windowTime } from 'rxjs/operators';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<HomeComponent> {
  canDeactivate():boolean{
    return window.confirm("are u sure to navigate?");
  }
  
}
