import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { CommentService } from '@app/services';
import { loadCommentsAction, commentsLoadedAction, commentsLoadFailAction } from './comments.actions';

@Injectable()
export class CommentsEffects {

  resolveComments$ = createEffect(() => this.actions$.pipe(
      ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
      map((action) => action.payload),
      filter(payload => !!payload.event.url.match(/^\/posts-with-redux\/\d*\/comments$/)),
      map(payload => {
        const segment = payload.event.url.replace(/\/posts-with-redux\//, '').match(/\d*/);
        return loadCommentsAction({ postId: +segment[0] });
      }),
    ));

  loadComments$ = createEffect(() => this.actions$.pipe(
    ofType(loadCommentsAction),
    switchMap(action => this.commentService.getCommentsForPost(action.postId).pipe(
        map(comments => commentsLoadedAction({ comments })),
        catchError(() => of(commentsLoadFailAction())),
      )),
  ));

  constructor(private actions$: Actions,
              private commentService: CommentService) {}
}
