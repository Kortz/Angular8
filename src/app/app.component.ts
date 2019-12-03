import { Component } from '@angular/core';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];


  gameStarted(startEvent: {incremementedCounter: number}) {
    if (startEvent.incremementedCounter % 2 === 0) {
      this.evenNumbers.push(startEvent.incremementedCounter);
    } else {
      this.oddNumbers.push(startEvent.incremementedCounter);
    }
    console.log(startEvent.incremementedCounter);
  }

}
