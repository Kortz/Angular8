import { ElementRef, Renderer2, Input, OnInit, Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input()
    defaultColor: string = 'transparent';

    @Input('appBetterHighlight')
    highlightColor: string = 'yellow';

    @HostBinding('style.backgroundColor')
    backgroundColor: string;

    @HostBinding('style.color')
    fontColor: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
        this.highlightColor = this.highlightColor;
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'black');
        // this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }

    @HostListener('mouseover')
    mouseHover() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'black');
        // this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        this.backgroundColor = this.highlightColor;
        this.fontColor = 'white';
    }

    @HostListener('mouseout')
    mouseLeave() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'white');
        // this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
        this.backgroundColor = this.defaultColor;
        this.fontColor = 'black';
    }
}
