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
        OnDestroy} from '@angular/core';

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

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('ngDoCheckCalled!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked!')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy!');
  }

}
