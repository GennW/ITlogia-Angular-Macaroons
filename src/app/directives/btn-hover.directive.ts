import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtnHover]'
})
export class BtnHoverDirective implements OnInit {

  @Input() defaultBackground!: string;
  @Input() hoverBackground!: string;

  constructor(private el: ElementRef) { 
   }

  ngOnInit(): void {
    this.setInitialBg();
  }

   setInitialBg() {
    if (this.defaultBackground) {
      this.el.nativeElement.style.backgroundImage  = this.defaultBackground;
    } else {
      console.log('отсутствует this.defaultBackground', this.defaultBackground)
    }
   }

   @HostListener('mouseenter') onMouseEnter() {

    if (this.hoverBackground) {
      this.el.nativeElement.style.backgroundImage  = this.hoverBackground;
    }
   }

  
   @HostListener('mouseleave') onMouseLeave() {
    if (this.defaultBackground) {
      this.el.nativeElement.style.backgroundImage  = this.defaultBackground;
    }
  }

}
