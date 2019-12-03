import { Component,
        OnInit,
        Input,
        ViewEncapsulation,
        OnChanges,
        SimpleChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewChecked,
        AfterViewInit,
        OnDestroy,
        ViewChild,
        ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {
  @Input('srvElement')
  element: {type: string, name: string, content: string};

  @Input() name: string;
  @ViewChild('heading', {static: true}) heading: ElementRef;

  @ContentChild('projectedContent', {static: true}) projectedContent: ElementRef;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log(this.heading.nativeElement);
    console.log('OnInit Content: ' + this.projectedContent.nativeElement);
  }

  ngDoCheck() {
    console.log('ngDoCheckCalled!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit!');
    console.log('ContentInit: ' + this.projectedContent.nativeElement);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit!');
    console.log(this.heading.nativeElement);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked!')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy!');
  }

}
