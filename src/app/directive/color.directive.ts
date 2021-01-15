import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private eRef:ElementRef) {
    this.eRef.nativeElement.style.color = "blue";
   }

}
