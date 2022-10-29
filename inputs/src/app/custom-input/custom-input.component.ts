import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component,  forwardRef } from '@angular/core';


@Component({
  selector: 'custom-input',
  template: '',
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    }]
})
export class CustomInputComponent implements ControlValueAccessor {
  controlValue: any;
  public valueChanged(value: string | null): void {}
  public touched(): void {}

  writeValue(value: any): void {
    this.controlValue = value;
    console.log(value);
  }

  registerOnChange(fn: any): void {
    this.valueChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
}

