import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MehediComponent } from './mehedi/mehedi.component';
import { RaihanComponent } from './raihan/raihan.component';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [AppComponent, MehediComponent, RaihanComponent],
  imports: [BrowserModule,
        BrowserAnimationsModule, AppRoutingModule, ButtonModule, InputTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
