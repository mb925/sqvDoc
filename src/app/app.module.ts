import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SqvLibModule } from 'sqv-lib';

import {InterfaceComponent} from '../interface/interface.component';
import {HttpClientModule} from '@angular/common/http';
import {MyLibModule} from 'liibb';


@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent

  ],
  imports: [
    BrowserModule,
    SqvLibModule,
    HttpClientModule,
    MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
