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
  evenElements: EvenComponent[] = [];
  oddElements: OddComponent[] = [];


  gameStarted(startEvent: {incremementedCounter: number}) {
    if (startEvent.incremementedCounter % 2 === 0) {
      let component = new EvenComponent();
      component.value = startEvent.incremementedCounter;
      this.evenElements.push(component);
    } else {
      let component = new OddComponent();
      component.value = startEvent.incremementedCounter;
      this.oddElements.push(component);
    }
    console.log(startEvent.incremementedCounter);
  }

}
