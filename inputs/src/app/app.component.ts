import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h2>CUSTOM INPUTS</h2>
    <form [formGroup]="formGroup">
      <name-input formControlName="name" style-directive></name-input>
      <age-input formControlName="age" style-directive></age-input>
      <country-input formControlName="country" style-directive></country-input>
    </form>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formGroup = this.formBuilder.group({
    name: ['name', Validators.required],
    age: ['age', Validators.required],
    country: ['country', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}
}
