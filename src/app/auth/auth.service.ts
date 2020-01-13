import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { AuthToken } from './auth-token.model';
import { catchError } from 'rxjs/operators';

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
    signupAPI = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQpIRP8oMrfMiNJdgsV9df4UEpjrPJEQ4';
    loginAPI = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQpIRP8oMrfMiNJdgsV9df4UEpjrPJEQ4'


    signup(formEmail: string, formPassword: string) {
        return this.http.post<AuthToken>(this.signupAPI, this.createRequestBody(formEmail, formPassword))
        .pipe(catchError(this.handleError));
    }

    login(formEmail: string, formPassword: string) {
        return this.http.post<AuthToken>(this.loginAPI, this.createRequestBody(formEmail, formPassword))
        .pipe(catchError(this.handleError));
    }

    createRequestBody(formEmail: string, formPassword: string) {
        return {
            email: formEmail,
            password: formPassword,
            returnSecureToken: true
        };
    }

    handleError(errorResponse: HttpErrorResponse) {
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
