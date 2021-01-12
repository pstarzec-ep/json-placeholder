import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { Post } from '@app/models';
import { Injectable } from '@angular/core';
import { PostService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';

export const POSTS_PAGE_STATE = 'posts-page';

export enum PostsActionTypes {
  Load = '[Posts] Load',
  Loaded = '[Posts] Loaded',
  LoadFail = '[Posts] Load Fail',
}

export class PostsActions {
  public static load = createAction(PostsActionTypes.Load);
  public static loaded = createAction(PostsActionTypes.Loaded, props<{ posts: Post[] }>());
  public static loadFail = createAction(PostsActionTypes.LoadFail);
}

export interface PostsState {
  loading: boolean;
  posts: Post[];
}

const init = {
  loading: false,
  posts: [],
};

const reducer = createReducer(
  init,
  on(PostsActions.load, (state) => ({ ...state, loading: true })),
  on(PostsActions.loaded, (state, { posts }) => ({ ...state, loading: false, posts })),
  on(PostsActions.loadFail, (state) => ({ ...state, loading: false, posts: [] })),
);

export function postsReducer(state, action): PostsState {
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

  // postsResolver$ = createEffect(() => this.actions$.pipe(
  //   ofType(ROUTER_NAVIGATED),
  //   filter((action: RouterNavigatedAction) => action.payload.event.url === '/posts-with-redux'),
  //   map(() => PostsActions.load()),
  // ));

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostsActionTypes.Load),
    switchMap(() => {
      return this.postService.getPosts().pipe(
        map(posts => PostsActions.loaded({ posts })),
        catchError(() => of(PostsActions.loadFail())),
      );
    }),
  ));

  constructor(private actions$: Actions,
              private postService: PostService) {}
}
