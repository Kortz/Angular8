import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component.ts';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ServerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
