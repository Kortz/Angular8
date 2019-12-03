import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number;
  timer;

  @Output()
  counterIncremented = new EventEmitter<{incremementedCounter: number}>();

  constructor() {
    this.counter = 0;
   }

  ngOnInit() {
  }

  startGame() {
    this.timer = setInterval(() => {
      this.counterIncremented.emit({incremementedCounter: this.counter});
      this.counter = this.counter + 1;
    }, 1000, this.counterIncremented);
  }

  stopGame() {
    this.counter = 0;
    clearInterval(this.timer);
  }

}
