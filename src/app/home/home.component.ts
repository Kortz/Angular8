import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable} from 'rxjs';
import { map, filter} from 'rxjs/operators';

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
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    //Operator
    const pipedObservable: Observable<any> = customInternalObservable.pipe(
      filter((data: number) => {
        return data % 2 !== 0 ? true : false;
      }),
      map((data: number) => {
        return 'Round: ' + (+data + 1);
      })
    );

    this.count = pipedObservable.subscribe({
      next(data) {console.log(data); },
      error(error) {console.log(error); },
      complete() {console.log('Observer completed!'); }
    });

  }

  ngOnDestroy() {
    this.count.unsubscribe();
  }

}
