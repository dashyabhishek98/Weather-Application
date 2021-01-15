import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCheckNumber]'
})
export class CheckNumberDirective {
  @Input() defaultValue : any; 
  constructor(private eleRef:ElementRef) { }
  ngOnInit(){
    this.eleRef.nativeElement.value = this.defaultValue;
  }
  @HostListener('keyup') onkeyup(){
    if(this.eleRef.nativeElement.value<0 || this.eleRef.nativeElement.value>5){
      this.eleRef.nativeElement.style.backgroundColor="red";
    }
    else{
      this.eleRef.nativeElement.style.backgroundColor="green";
    }
  }
}
