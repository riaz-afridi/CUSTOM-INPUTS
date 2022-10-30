import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[style-directive]',
  host: {
    style: `
            font-size: 18px;
            font-weight: bold;
            outline: none;
            border: none;
            padding-left: 10px;
            box-sizing: border-box;
            border-radius: 10px;
            `
  }
})
export class StyleDirective {
  @HostBinding('style.height')
  @Input() height!: string;
  
  @HostBinding('style.width')
  @Input() width!: string;
  
  
}
