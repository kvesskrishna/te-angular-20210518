import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class HightlightDirective {
  constructor(private ele: ElementRef) {
    ele.nativeElement.style.backgroundColor = 'yellow';
    ele.nativeElement.textContent = 'red';
  }
  @HostListener('click') onClick() {
    alert('Host of appHightlight directive is clicked..');
  }
}
