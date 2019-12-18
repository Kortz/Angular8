import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) form: NgForm;
  user = {
    email: '',
    subscription: '',
    password: ''
  };


  submitForm() {
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.passwordInput;
    this.user.subscription = this.form.value.subscriptionDropdown;
    console.log(this.user);
    this.form.reset({
      email: '',
      subscriptionDropdown: 'Advanced',
      password: ''
    });
  }

}