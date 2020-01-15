import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    AuthService,
    LoggingService
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
