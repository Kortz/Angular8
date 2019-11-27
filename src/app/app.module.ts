import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component.ts';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ServerComponent, ServersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
