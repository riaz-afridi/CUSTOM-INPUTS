import { FormControl } from '@angular/forms';
import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR = (component: any): any => ({
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => component),
  multi: true,
});

@Directive({ selector: 'custom-input' })
export class CustomInputComponent<T> {
  control = new FormControl();

  public valueChanged(value: T): void { }

  public touched(): void {}

  writeValue(value: T): void {
    this.control.setValue(value);
    console.log(value);
  }

  registerOnChange(fn: any): void {
    this.valueChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(disabled: boolean): void {
    if (disabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
    
  }
}
