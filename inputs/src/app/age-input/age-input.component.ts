import { CustomInputComponent, VALUE_ACCESSOR } from '../custom-input/custom-input.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';



@Component({
  selector: 'age-input',
  template: `
    <input
      [formControl]="control"
      (change)="valueChanged(control.value)"
      style-directive height="100%" width="100%"
    />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [VALUE_ACCESSOR(AgeInputComponent)],
})
export class AgeInputComponent extends CustomInputComponent<number> {}
