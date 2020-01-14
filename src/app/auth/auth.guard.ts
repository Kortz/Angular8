import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.userChanged.pipe(map(user => {
            const valid = user !== null;
            return valid;
        }));
    }
}
