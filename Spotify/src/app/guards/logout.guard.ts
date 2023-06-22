import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterationFormComponent } from '../registeration-form/registeration-form.component';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: RegisterationFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate?component.canDeactivate():true;
  }
  
}
