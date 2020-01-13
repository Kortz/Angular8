import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';

import { AuthToken } from './auth-token.model';
import { tap, catchError } from 'rxjs/operators';

interface AuthRequestBody {
    email: string;
    password: string;
    returnSecureToken: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}
    private authToken: AuthToken;

    // authChanged = new Subject<AuthToken>();

    restAPI = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQpIRP8oMrfMiNJdgsV9df4UEpjrPJEQ4';

    signup(formEmail: string, formPassword: string) {
        const requestBody: AuthRequestBody = {
            email: formEmail,
            password: formPassword,
            returnSecureToken: true
        };

        // this.http.post<AuthToken>(this.restAPI, requestBody)
        //     .subscribe(responseData => {
        //         this.authToken = responseData;
        //         this.authChanged.next(this.getAuthToken());
        //     }, error => {
        //         this.authToken = null;
        //         this.authChanged.next(null);
        //     });

        return this.http.post<AuthToken>(this.restAPI, requestBody)
        .pipe(catchError(errorResponse => {
            let errorMessage = 'An error occured!';

            if (!errorResponse.error || !errorResponse.error.error) {
                return throwError(errorMessage);
            }
            switch(errorResponse.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'This user already exists!';
                    break;
                case 'OPERATION_NOT_ALLOWED':
                    errorMessage = 'Signup disabled for site!';
                    break;
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                    errorMessage = 'Too many signup attempts! Try again later.';
                    break;
              }
            return throwError(errorMessage);
        }));
    }

    private getAuthToken() {
        const authTokenCopy = Object.assign({}, this.authToken);
        return authTokenCopy;
    }
}
