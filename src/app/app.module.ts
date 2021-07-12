import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MehediComponent } from './mehedi/mehedi.component';
import { RaihanComponent } from './raihan/raihan.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, MehediComponent, RaihanComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
