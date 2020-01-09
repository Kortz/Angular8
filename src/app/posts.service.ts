import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private httpClient: HttpClient) {}

    storePost(postData: Post) {
        // Send Http request
        this.httpClient
            .post<{ name: string }>('https://angular-7ca7d.firebaseio.com/posts.json', postData)
            .subscribe(responseData => {
                console.log(responseData);
            });
    }

    fetchAllPosts() {
        return this.httpClient
            .get<{ [key: string]: Post }>('https://angular-7ca7d.firebaseio.com/posts.json')
            .pipe(
                map(responseData => {
                const postArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                    postArray.push({ ...responseData[key], id: key});
                    }
                }
                return postArray;
                }));
    }

    clearAllPosts() {
        this.httpClient
            .delete('https://angular-7ca7d.firebaseio.com/posts.json').subscribe(responseData => {
                console.log('All Posts cleared from database!');
            });
    }

    deletePost(post: Post) {
        const url = 'https://angular-7ca7d.firebaseio.com/posts/' + post.id + '.json';
        this.httpClient
            .delete(url).subscribe(responseData => {
                console.log('All Posts cleared from database!');
            });
    }
}
