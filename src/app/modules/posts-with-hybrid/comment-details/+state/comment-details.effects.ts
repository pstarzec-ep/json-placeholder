import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { CommentService } from '@app/services';
import { loadCommentDetailsAction, commentDetailsLoadedAction, commentDetailsLoadFailAction } from './comment-details.actions';

@Injectable()
export class CommentDetailsEffects {

  resolveComments$ = createEffect(() => this.actions$.pipe(
      ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
      map((action) => action.payload),
      filter(payload => !!payload.event.url.match(/^\/posts-with-hybrid\/\d*\/comment\//)),
      map(payload => {
        const segment = payload.event.url.replace(/^\/posts-with-hybrid\/\d*\/comment\//, '').match(/\d*/);
        return loadCommentDetailsAction({ commentId: +segment[0] });
      }),
    ));

  loadComments$ = createEffect(() => this.actions$.pipe(
    ofType(loadCommentDetailsAction),
    switchMap(action => this.commentService.getCommentsById(action.commentId).pipe(
        map(comment => commentDetailsLoadedAction({ comment })),
        catchError(() => of(commentDetailsLoadFailAction())),
      )),
  ));

  constructor(private actions$: Actions,
              private commentService: CommentService) {}
}
