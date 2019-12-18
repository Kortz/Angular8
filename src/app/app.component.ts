import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  answer: string;
  genders: string[] = ['male', 'female'];


  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''},
    //   securityQuestion: {
    //     secret: 'pet',
    //     questionAnswer: ''
    //   },
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted!');
  //   console.log(form);
  // }

  onSubmit(form: NgForm) {
    console.log('Submitted!');
    console.log(this.signupForm);
  }
}
