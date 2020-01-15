import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthToken } from './auth-token.model';
import { User } from './user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router) {}
    signupAPI = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey;
    loginAPI = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey;
    userChanged = new BehaviorSubject<User>(null);
    tokenExpirationTimer: any;


    signup(formEmail: string, formPassword: string) {
        return this.http.post<AuthToken>(this.signupAPI, this.createRequestBody(formEmail, formPassword))
        .pipe(catchError(this.handleError),
        tap((token) => {
            this.userChanged.next(this.handleAuth(token));
            this.autoLogout(+token.expiresIn * 1000);
        }));
    }

    login(formEmail: string, formPassword: string) {
        return this.http.post<AuthToken>(this.loginAPI, this.createRequestBody(formEmail, formPassword))
        .pipe(catchError(this.handleError),
        tap((token) => {
            this.userChanged.next(this.handleAuth(token));
            this.autoLogout(+token.expiresIn * 1000);
        }));
    }

    logout() {
        this.userChanged.next(this.handleAuth(null));
        clearTimeout(this.tokenExpirationTimer);
        this.router.navigate(['/auth']);
    }

    autoLogin() {
        const userData: User = JSON.parse(localStorage.getItem('userData'));
        if (userData !== null) {
            const loadedUser = new User(userData.token);
            if (loadedUser.isUserValid()) {
                this.autoLogout(loadedUser.getExpiryDate().getTime() - new Date().getTime());
                this.userChanged.next(loadedUser);
            }
        }
    }

    private autoLogout(expiresIn: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expiresIn);
    }

    private handleAuth(token: AuthToken) {
        const user = token != null ? new User(token) : null;
        user != null ? localStorage.setItem('userData', JSON.stringify(user)) : localStorage.removeItem('userData');
        return user;
    }

    private createRequestBody(formEmail: string, formPassword: string) {
        return {
            email: formEmail,
            password: formPassword,
            returnSecureToken: true
        };
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = 'An error occured!';
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This user already exists!';
                break;
            case 'OPERATION_NOT_ALLOWED':
                errorMessage = 'Signup disabled for site!';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = 'Too many signup attempts! Try again later.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This user does not exists!';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Invalid password!';
                break;
            case 'USER_DISABLED':
                errorMessage = 'This user has been disabled!';
                break;

            }
        return throwError(errorMessage);
    }
}
