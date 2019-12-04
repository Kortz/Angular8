import { ElementRef, Renderer2, OnInit, Directive } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'black');
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }
}
