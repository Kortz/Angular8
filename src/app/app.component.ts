import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  loadedPosts: Post[] = [];
  isFetching = false;
  postsSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postService.storePost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsSubscription = this.postService.fetchAllPosts().subscribe((responseData) => {
      this.loadedPosts = responseData;
      this.isFetching = false;
    });
  }

  onClearPosts() {
    // Send Http request to delete all posts.
    this.postService.clearAllPosts();
  }

  onDeletePost(post: Post) {
    this.postService.deletePost(post);
  }
}
