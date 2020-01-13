import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';
import { AuthToken } from './auth-token.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = false;
  form: FormGroup;
  // authSubscription: Subscription = null;
  isLoading = false;

  error: string;
  authToken: AuthToken;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const emailControl = new FormControl(
      null, [
        Validators.required,
        Validators.email]);

    const passwordControl = new FormControl(
      null,
        [Validators.required,
          Validators.minLength(6)]);

    this.form = new FormGroup({
      email: emailControl,
      password: passwordControl
    });

    // this.authSubscription = this.authService.authChanged.subscribe((token: AuthToken) => {
    //   this.error = (token !== null ? null : 'An error occured!');
    //   this.authToken = token;
    //   this.isLoading = false;
    // });
  }

  ngOnDestroy() {
    // this.authSubscription.unsubscribe();
  }

  submit() {
    this.isLoading = true;

    if (!this.isLoginMode) {
      // this.authService.signup(this.form.value.email, this.form.value.password);
      this.authService.signup(this.form.value.email, this.form.value.password)
        .subscribe(
        (responseData) => {
          console.log('User Signed Up!');
          this.error = null;
          this.isLoading = false;
        },
        (errorResponse) => {
          console.log('Signup failed!');

          switch(errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              this.error = 'This user already exists!';
              break;
            case 'OPERATION_NOT_ALLOWED':
              this.error = 'Signup disabled for site!';
              break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              this.error = 'Too many signup attempts! Try again later.';
              break;
            default:
              this.error = 'An error occured!';
              break;
          }
          this.isLoading = false;
        });
    }
    this.form.reset();
  }

  isFormValid() {
    return this.form.valid && this.form.touched;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
