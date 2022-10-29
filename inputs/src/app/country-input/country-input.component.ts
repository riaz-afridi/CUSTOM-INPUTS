import { CustomInputComponent } from '../custom-input/custom-input.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'country-input',
  template: `<input [value]="controlValue" style-directive />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInputComponent extends CustomInputComponent {
  // Some additional behavior
}
