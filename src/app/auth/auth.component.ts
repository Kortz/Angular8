import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { AuthService } from './auth.service';
import { Subscription, Observable } from 'rxjs';
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
  authObservable: Observable<AuthToken>;

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
      this.authObservable = this.signup();
    } else {
      this.authObservable = this.login();
    }
    this.authObservable.subscribe(
      (responseData) => {
        this.error = null;
        this.isLoading = false;
      },
      error => {
        this.error = error;
        this.isLoading = false;
      });
    this.form.reset();
  }

  login() {
    return this.authService.login(this.form.value.email, this.form.value.password);
  }

  isFormValid() {
    return this.form.valid && this.form.touched;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  signup() {
    // this.authService.signup(this.form.value.email, this.form.value.password);
    return this.authService.signup(this.form.value.email, this.form.value.password);
  }

}
