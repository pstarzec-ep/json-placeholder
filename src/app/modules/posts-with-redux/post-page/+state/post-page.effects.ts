import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { PostService } from '@app/services';
import { loadPostAction, PostActions, postLoadedAction, postLoadFailAction } from './post-page.actions';

@Injectable()
export class PostPageEffects {

  resolvePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
      map((action) => action.payload),
      filter(payload => !!payload.event.url.match(/^\/posts-with-redux\/\d*$/)),
      map((payload) => {
        const segment = payload.event.url.replace(/\/posts-with-redux\//, '').match(/\d*$/);
        return loadPostAction({ postId: +segment[0] });
      }),
    );
  });

  loadPost$ = createEffect(() => this.actions$.pipe(
    ofType(loadPostAction),
    switchMap(action => {
      return this.postService.getPostById(action.postId).pipe(
        map(post => postLoadedAction({ post })),
        catchError(() => of(postLoadFailAction())),
      );
    }),
  ));

  constructor(private actions$: Actions<PostActions>,
              private postService: PostService) {}
}
