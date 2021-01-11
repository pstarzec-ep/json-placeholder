import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IPost, Post } from '@app/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<IPost[]>(`${environment.api}/posts`).pipe(
      map(response => response.map(post => new Post(post))),
    );
  }

  public getPostById(postId: number): Observable<Post> {
    return this.http.get<IPost>(`${environment.api}/posts/${postId}`).pipe(
      map(response => new Post(response)),
    );
  }
}
