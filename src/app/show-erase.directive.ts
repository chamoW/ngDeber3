import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appShowErase]'
})
export class ShowEraseDirective {

  constructor(private elementRef: ElementRef) {

    console.log(elementRef);

  }

  @HostListener('mouseenter') onmouseenter() {
    this.elementRef.nativeElement.children[1].style.display = 'inline';
  }


  @HostListener('mouseleave') onmouseleave() {
    this.elementRef.nativeElement.children[1].style.display = 'none';
  }

}
