import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    error = new Subject<string>();

    constructor(private httpClient: HttpClient) {}

    storePost(postData: Post) {
        // Send Http request
        this.httpClient
            .post<{ name: string }>('https://angular-7ca7d.firebaseio.com/posts.json', postData, {
                observe: 'response'
            })
            .subscribe(responseData => {
                console.log(responseData);
            }, error => {
                this.error.next(error.message);
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
                }),
                catchError(errorRes => {
                    // Send to analytics server
                    return throwError(errorRes);
                }));
    }

    clearAllPosts() {
        return this.httpClient
            .delete('https://angular-7ca7d.firebaseio.com/posts.json', {
                observe: 'events'
            })
            .pipe(
                tap(event => {
                    switch (event.type) {
                        case HttpEventType.DownloadProgress:
                            console.log('DownloadProgress');
                            break;
                        case HttpEventType.Response:
                            console.log('Response');
                            break;
                        case HttpEventType.ResponseHeader:
                            console.log('ResponseHeader');
                            break;
                        case HttpEventType.Sent:
                            console.log('Sent');
                            break;
                        case HttpEventType.UploadProgress:
                            console.log('UploadProgress');
                            break;
                        case HttpEventType.User:
                            console.log('User');
                            break;
                        default:
                            console.log('Default');
                            break;
                    }
                })
            );
    }

    deletePost(post: Post) {
        const url = 'https://angular-7ca7d.firebaseio.com/posts/' + post.id + '.json';
        return this.httpClient
            .delete(url);
    }
}
