import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.userChanged.pipe(take(1), exhaustMap(user => {
            const modifiedRequest = 
                req.clone(
                    { params: new HttpParams()
                        .set('auth', user != null ? user.getTokenId() : null)});
            return next.handle(modifiedRequest);
        }));
    }

}
