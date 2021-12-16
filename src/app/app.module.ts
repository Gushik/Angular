import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { LocalBankComponent } from './local-bank/local-bank.component';
import { Test03Component } from './test03/test03.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    LocalBankComponent,
    Test03Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
