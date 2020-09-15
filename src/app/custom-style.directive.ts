import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el: ElementRef) {
    if (el != null && el.nativeElement != null && el.nativeElement.style != null) {
      // Change the color of the html element
      el.nativeElement.style.color = "red";
    }
  }

}
