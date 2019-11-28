import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component.ts';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ServerComponent, ServersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
