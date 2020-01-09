import { Component, OnInit, OnDestroy } from '@angular/core';

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
  error = null;
  postsSubscription: Subscription;
  errorSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.errorSubscription = this.postService.error.subscribe(error => {
      this.error = error;
    });
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
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
      this.error = null;
    }, error => {
      this.error = error.message;
      this.isFetching = false;
    });
  }

  onClearPosts() {
    // Send Http request to delete all posts.
    this.postService.clearAllPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onDeletePost(postIndex: number) {
    this.postService.deletePost(this.loadedPosts[postIndex]).subscribe(() => {
      this.loadedPosts.splice(postIndex, 1);
    });
  }

  clearError() {
    this.error = null;
  }
}
