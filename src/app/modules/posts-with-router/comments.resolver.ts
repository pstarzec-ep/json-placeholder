import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CommentService } from '@app/services';
import { Observable, of } from 'rxjs';
import { Comment } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class CommentsResolver implements Resolve<Comment[]> {

  constructor(private commentService: CommentService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> {
    // NOTE: Accessing params from parent, not from route directly
    const postId = route.parent.paramMap.get('postId');

    if (!postId) {
      return of([]);
    }

    return this.commentService.getCommentsForPost(+postId);
  }
}
