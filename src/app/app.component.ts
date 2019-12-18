import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  project = {
    name: '',
    email: '',
    status: ''
  };

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, this.requiredField),
      email: new FormControl(null, Validators.required),
      status: new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  requiredField(control: FormControl): {[_: string]: boolean} {
    if (!control.value) {
      return {invalidProjectName: true};
    }
    return null;
  }

}
