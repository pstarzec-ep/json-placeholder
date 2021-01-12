import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { PostService } from '@app/services';
import { loadPostsAction, postsLoadedAction, postsLoadFailAction } from './posts-page.actions';

@Injectable()
export class PostsPageEffects {

  resolvePosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
      filter(action => !!action.payload.event.url.match(/^\/posts-with-redux$/)),
      tap(action => console.log(action)),
      map(() => loadPostsAction()),
    );
  });

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType<typeof loadPostsAction>(loadPostsAction.type),
    switchMap(action => {
      return this.postService.getPosts().pipe(
        map(posts => postsLoadedAction({ posts })),
        catchError(() => of(postsLoadFailAction())),
      );
    }),
  ));

  constructor(private actions$: Actions,
              private postService: PostService) {}
}
