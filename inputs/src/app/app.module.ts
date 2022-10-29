import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { NameInputComponent } from './name-input/name-input.component';
import { AgeInputComponent } from './age-input/age-input.component';
import { CountryInputComponent } from './country-input/country-input.component';
import { StyleDirective } from './style.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    NameInputComponent,
    AgeInputComponent,
    CountryInputComponent,
    StyleDirective,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
