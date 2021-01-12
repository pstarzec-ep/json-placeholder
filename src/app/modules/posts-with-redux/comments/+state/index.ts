import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { Comment, Post } from '@app/models';
import { Injectable } from '@angular/core';
import { CommentService, PostService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

export const COMMENTS_STATE = 'comments';

export enum CommentsActionTypes {
  Load = '[Comments] Load',
  Loaded = '[Comments] Loaded',
  LoadFail = '[Comments] Load Fail',
}

export class CommentsActions {
  public static load = createAction(CommentsActionTypes.Load, props<{ postId: number }>());
  public static loaded = createAction(CommentsActionTypes.Loaded, props<{ comments: Comment[] }>());
  public static loadFail = createAction(CommentsActionTypes.LoadFail);
}

export interface CommentsState {
  loading: boolean;
  comments: Comment[];
}

const init = {
  loading: false,
  comments: [],
};

const reducer = createReducer(
  init,
  on(CommentsActions.load, (state) => ({ ...state, loading: true })),
  on(CommentsActions.loaded, (state, { comments }) => ({ ...state, loading: false, comments })),
  on(CommentsActions.loadFail, (state) => ({ ...state, loading: false, posts: [] })),
);

export function commentsReducer(state, action): CommentsState {
  return reducer(action, action);
}

const featureSelector = (state: any) => state[COMMENTS_STATE];

export class FromCommentsState {
  public static selectComments = createSelector(
    featureSelector,
    state => state.posts,
  );

  public static selectLoading = createSelector(
    featureSelector,
    state => state.loading,
  );
}

@Injectable()
export class CommentsEffects {

  loadComments$ = createEffect(() => this.actions$.pipe(
    ofType(CommentsActionTypes.Load),
    switchMap((action: any) => {
      return this.commentService.getCommentsForPost(action.postId).pipe(
        map(comments => CommentsActions.loaded({ comments })),
        catchError(() => of(CommentsActions.loadFail())),
      );
    }),
  ));

  constructor(private actions$: Actions,
              private commentService: CommentService) {}
}
