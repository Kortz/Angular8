import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') showDropdown = false;

    constructor(private elementRef: ElementRef) {
    }

    @HostListener('document:click', ['$event'])
    onClick(event: Event) {
        this.showDropdown = this.elementRef.nativeElement.contains(event.target) ? !this.showDropdown : false;
    }

}
