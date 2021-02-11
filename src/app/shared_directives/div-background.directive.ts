import { Directive, ElementRef, HostListener, Renderer2, } from '@angular/core';

@Directive({
  selector: '[appDivBackground]'
})
export class DivBackgroundDirective {

  constructor(private element:ElementRef,private render:Renderer2) {
    this.render.setStyle(this.element.nativeElement,'width','895px');
    this.render.setStyle(this.element.nativeElement,'height','650px');
    this.render.setStyle(this.element.nativeElement,'position','relative');
    
    
    
  }
  @HostListener('mouseenter') OnMouseEnter(){
    this.render.setStyle(this.element.nativeElement,'background','#c3942c')
   
    
  }
  @HostListener('mouseleave') OnMouseLeave(){
    this.render.setStyle(this.element.nativeElement,'background','')
}
}
