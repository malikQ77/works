import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    if (localStorage.getItem('token') != null)
     return true;
    else {
      const navigattion = this.router.getCurrentNavigation();
      
      
    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: navigattion?.extractedUrl }});
    }
    return false;
  }
}