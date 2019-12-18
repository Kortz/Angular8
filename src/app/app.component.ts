import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  form: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.form = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
    this.form.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
    this.form.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.form.get('hobbies') as FormArray).push(control);
  }

  getControls() {
    return (this.form.get('hobbies') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.form);
  }

  forbiddenNames(control: FormControl): {[_: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {forbiddenName: true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
