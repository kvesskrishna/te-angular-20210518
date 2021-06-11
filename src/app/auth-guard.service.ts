import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(this.auth.status, route, state);
    if (
      this.auth.status?.login &&
      route.data.expectedRole == this.auth.status.role
    )
      return true;
    else {
      this.router.navigate(['/login'], {
        queryParams: { returnPath: state.url },
      });
      return false;
    }
  }
}
