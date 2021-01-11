import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { Post } from '@app/models';
import { Injectable } from '@angular/core';
import { PostService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

export const POSTS_PAGE_STATE = 'post-page';

export enum PostActionTypes {
  Load = '[Posts] Load',
  Loaded = '[Posts] Loaded',
  LoadFail = '[Posts] Load Fail',
}

export class PostActions {
  public static load = createAction(PostActionTypes.Load);
  public static loaded = createAction(PostActionTypes.Loaded, props<{ posts: Post[] }>());
  public static loadFail = createAction(PostActionTypes.LoadFail);
}

export interface PostState {
  loading: boolean;
  posts: Post[];
}

const init = {
  loading: false,
  posts: [],
};

const reducer = createReducer(
  init,
  on(PostActions.load, (state) => ({ ...state, loading: true })),
  on(PostActions.loaded, (state, { posts }) => ({ ...state, loading: false, posts })),
  on(PostActions.loadFail, (state) => ({ ...state, loading: false, posts: [] })),
);

export function postsReducer(state, action): PostState {
  return reducer(action, action);
}

const featureSelector = (state: any) => state[POSTS_PAGE_STATE];

export class FromPostsState {
  public static selectPosts = createSelector(
    featureSelector,
    state => state.posts,
  );

  public static selectLoading = createSelector(
    featureSelector,
    state => state.loading,
  );
}

@Injectable()
export class PostsEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActionTypes.Load),
    switchMap(() => {
      return this.postService.getPosts().pipe(
        map(posts => PostActions.loaded({ posts })),
        catchError(() => of(PostActions.loadFail())),
      );
    }),
  ));

  constructor(private actions$: Actions,
              private postService: PostService) {}
}
