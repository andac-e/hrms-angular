import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateResumeAddGuard implements CanActivate {
  constructor(private toastrService: ToastrService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('user')) {
        let user = JSON.parse(localStorage.getItem('user'));
        let loggedUser = user.message;
        if (loggedUser.includes('candidate')) {
          return true;
        } else {
          this.toastrService.error('Bu sayfaya giriş izniniz bulunmuyor.');
          this.router.navigate(['home']);
          return false;
        }
      } else {
        this.toastrService.error('Öncelikle giriş yapmalısınız.');
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
