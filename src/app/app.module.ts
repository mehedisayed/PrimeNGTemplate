import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MehediComponent } from './mehedi/mehedi.component';
import { RaihanComponent } from './raihan/raihan.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChipsModule } from 'primeng/chips';
import { PasswordModule } from 'primeng/password';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MehediComponent, RaihanComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    KeyFilterModule,
    MessageModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    InputSwitchModule,
    ChipsModule,
    PasswordModule,
    RatingModule,
    PaginatorModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
