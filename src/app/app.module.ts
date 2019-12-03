import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GameControlComponent, OddComponent, EvenComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
