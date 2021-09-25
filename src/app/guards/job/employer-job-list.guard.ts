import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerJobListGuard implements CanActivate {
  constructor(private toastrService: ToastrService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('user')) {
        let user = JSON.parse(localStorage.getItem('user'));
        let loggedUser = user.message;
        if (loggedUser.includes('employer')) {
          return true;
        } else {
          this.toastrService.error("You don't have permission to access this page.");
          this.router.navigate(['home']);
          return false;
        }
      } else {
        this.toastrService.error('You have to login for view this page.');
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
