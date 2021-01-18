import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { PostService } from '@app/services';
import { loadPostsAction, postsLoadedAction, postsLoadFailAction } from './posts-page.actions';

@Injectable()
export class PostsPageEffects {

  resolvePosts$ = createEffect(() => this.actions$.pipe(
    ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
    map((action) => action.payload),
    filter(payload => !!payload.event.url.match(/^\/posts-with-hybrid$/)),
    map(() => loadPostsAction()),
  ));

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(loadPostsAction),
    switchMap(action => this.postService.getPosts().pipe(
      map(posts => postsLoadedAction({ posts })),
      catchError(() => of(postsLoadFailAction())),
    )),
  ));

  constructor(private actions$: Actions,
              private postService: PostService) {}
}
