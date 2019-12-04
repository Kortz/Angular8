import { ElementRef, Renderer2, OnInit, Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @HostBinding('style.backgroundColor')
    backgroundColor: string = 'transparent';

    @HostBinding('style.color')
    fontColor: string = 'black';

    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'black');
        // this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }

    @HostListener('mouseover')
    mouseHover() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'black');
        // this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        this.backgroundColor = 'black';
        this.fontColor = 'white';
    }

    @HostListener('mouseout')
    mouseLeave() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'white');
        // this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
        this.backgroundColor = 'transparent';
        this.fontColor = 'black';
    }
}
