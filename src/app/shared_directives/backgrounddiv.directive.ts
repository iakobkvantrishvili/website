import { Directive,ElementRef,HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackgrounddiv]'
})
export class BackgrounddivDirective {

  constructor(private element:ElementRef,private render:Renderer2) {
   

  
    
   }
  @HostListener('mouseenter') OnMouseEnter(){
    this.render.setStyle(this.element.nativeElement,'background','#c3942c')
  }
  @HostListener('mouseleave') OnMouseLeave(){
    this.render.setStyle(this.element.nativeElement,'background','')
}
 
}
