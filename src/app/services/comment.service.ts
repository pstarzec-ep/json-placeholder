import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Comment, IComment } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  constructor(private http: HttpClient) { }

  public getCommentsForPost(postId: number): Observable<Comment[]> {
    const params = { postId } as any;
    return this.http.get<IComment[]>(`${environment.api}/comments`, { params }).pipe(
      map(response => response.map(comment => new Comment(comment))),
    );
  }
}
