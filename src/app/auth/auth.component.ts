import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AuthToken } from './auth-token.model';
import { Router } from '@angular/router';

import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = false;
  form: FormGroup;
  isLoading = false;
  authObservable: Observable<AuthToken>;
  // error: string;
  authToken: AuthToken;

  @ViewChild(PlaceholderDirective, {static: true})
  alertHost: PlaceholderDirective;

  constructor(private authService: AuthService, private router: Router, private cfr: ComponentFactoryResolver) { }

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
        // this.error = null;
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error => {
        // this.error = error;
        this.showErrorAlert(error);
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
    return this.authService.signup(this.form.value.email, this.form.value.password);
  }

  showErrorAlert(errorMessage: string) {
    const alertFactory = this.cfr.resolveComponentFactory(AlertComponent);
    const hostViewContRef = this.alertHost.viewContainerRef;
    hostViewContRef.clear();
    hostViewContRef.createComponent(alertFactory);
  }

  onHandleError() {
    // this.error = null;
  }

}
