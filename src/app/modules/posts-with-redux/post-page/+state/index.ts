import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { Post } from '@app/models';
import { Injectable } from '@angular/core';
import { PostService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

export const POST_PAGE_STATE = 'post-page';

export enum PostActionTypes {
  Load = '[Post] Load',
  Loaded = '[Post] Loaded',
  LoadFail = '[Post] Load Fail',
}

export class PostActions {
  public static load = createAction(PostActionTypes.Load, props<{ postId: number }>());
  public static loaded = createAction(PostActionTypes.Loaded, props<{ post: Post }>());
  public static loadFail = createAction(PostActionTypes.LoadFail);
}

export interface PostState {
  loading: boolean;
  post: Post;
}

const init = {
  loading: false,
  post: null,
};

const reducer = createReducer(
  init,
  on(PostActions.load, (state) => ({ ...state, loading: true })),
  on(PostActions.loaded, (state, { post }) => ({ ...state, loading: false, post })),
  on(PostActions.loadFail, (state) => ({ ...state, loading: false, post: [] })),
);

export function postReducer(state, action): PostState {
  return reducer(action, action);
}

const featureSelector = (state: any) => state[POST_PAGE_STATE];

export class FromPostState {
  public static selectPost = createSelector(
    featureSelector,
    state => state.post,
  );

  public static selectLoading = createSelector(
    featureSelector,
    state => state.loading,
  );
}

@Injectable()
export class PostEffects {

  loadPost$ = createEffect(() => this.actions$.pipe(
    ofType(PostActionTypes.Load),
    switchMap((action: any) => {
      return this.postService.getPostById(action.postId).pipe(
        map(post => PostActions.loaded({ post })),
        catchError(() => of(PostActions.loadFail())),
      );
    }),
  ));

  constructor(private actions$: Actions,
              private postService: PostService) {}
}
