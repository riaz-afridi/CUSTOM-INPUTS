import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[style-directive]',
  host: {
    style: `
            width: 90%;
            height: 40%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            border: none;
            outline: none;

            `
  }
})
export class StyleDirective {}
