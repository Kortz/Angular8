import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component.ts';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ServerComponent, ServersComponent, WarningAlertComponent, SuccessAlertComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
