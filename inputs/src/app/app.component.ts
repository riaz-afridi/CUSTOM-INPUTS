import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  template: `
    <h2>CUSTOM INPUTS</h2>
    <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
      <name-input
        formControlName="name"
        style-directive
        height="10%"
        width="80%"
      ></name-input>
      <age-input
        formControlName="age"
        style-directive
        height="10%"
        width="80%"
      ></age-input>
      <country-input
        formControlName="country"
        style-directive
        height="10%"
        width="80%"
      ></country-input>
      
      <span>{{ formGroup.disabled }}</span>
      <button type="submit" style-directive height="8%" width="50%">
        SUBMIT
      </button>

      <button (click)="enableForm()" style-directive height="8%" width="50%">
        ENABLE FORM
      </button>
      <button (click)="disableForm()" style-directive height="8%" width="50%">
        DISABLE FORM
      </button>
    </form>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formGroup = this.formBuilder.group({
    name: ['name', Validators.required],
    age: [0, Validators.required],
    country: ['country', Validators.required],
  });

  onSubmit(): void {
    console.log(this.formGroup.value);
  }

  disableForm(): void {
    this.formGroup.disable();
  }
  enableForm(): void {
    this.formGroup.enable();
  }

  constructor(private formBuilder: FormBuilder) {}
}
