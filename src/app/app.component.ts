import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // form: FormGroup;
  // project = {
  //   name: '',
  //   email: '',
  //   status: ''
  // };

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   name: new FormControl(null),
    //   email: new FormControl(null),
    //   status: new FormControl(null)
    // });
  }


}
