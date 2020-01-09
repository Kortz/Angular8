import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post(
        'https://angular-7ca7d.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.http
      .get('https://angular-7ca7d.firebaseio.com/posts.json')
      .pipe(
        map((responseData: { [key: string]: Post}) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key});
            }
          }
          return postArray;
        }))
        .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
