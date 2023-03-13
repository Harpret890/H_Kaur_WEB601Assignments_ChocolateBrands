import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appHovereffects]'
})
export class HovereffectsDirective {

  
  constructor(private elm: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter(){
    this.elm.nativeElement.style.textDecoration = 'underline';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.elm.nativeElement.style.textDecoration = 'none';
  }

}
