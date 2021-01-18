import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CommentService } from '@app/services';
import { Observable, of } from 'rxjs';
import { Comment } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class CommentResolver implements Resolve<Comment> {

  constructor(private commentService: CommentService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment> {
    const commentId = +route.paramMap.get('commentId');
    if (!commentId) {
      return of(null);
    }
    return this.commentService.getCommentsById(commentId);
  }
}
