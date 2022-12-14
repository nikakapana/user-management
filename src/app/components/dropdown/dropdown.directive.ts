import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

@HostListener('click') toggleOpen() {
    this.ElementRef.nativeElement.getElementsByClassName('dropdown__content')[0].classList.toggle('open')
}
// @HostListener('document:click', ['$event'])
// backDropClick(event: any) {
//   if (!this.ElementRef.nativeElement.contains(event.target)){
//     this.ElementRef.nativeElement.getElementsByClassName('dropdown__content')[0].classList.toggle('open')
//   }
// }

constructor(
  private ElementRef: ElementRef
) {
}

}
