import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyStyles]'
})
export class MyStylesDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = '#0000ff';
    el.nativeElement.style.cursor = 'pointer';
  }
}
