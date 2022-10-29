import { CustomInputComponent } from '../custom-input/custom-input.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'age-input',
  template: `<input [value]="controlValue" style-directive />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgeInputComponent extends CustomInputComponent {
  // Some additional behavior
}
