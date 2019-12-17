import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  count: Subscription;

  constructor() { }

  ngOnInit() {
    // this.count = interval(1000).subscribe(
    //   count => {
    //     console.log(count);
    //   });

    const customInternalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.count = customInternalObservable.subscribe({
      next(data) {console.log(data); },
      error() {},
      complete() {}
    });

  }

  ngOnDestroy() {
    this.count.unsubscribe();
  }

}
