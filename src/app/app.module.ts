import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
