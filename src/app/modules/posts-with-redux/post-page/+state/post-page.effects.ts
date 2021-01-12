import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { EMPTY, of } from 'rxjs';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { PostService } from '@app/services';
import { loadPostAction, PostActions, postLoadedAction, postLoadFailAction } from './post-page.actions';
import { Store } from '@ngrx/store';
import { FromPostPageState } from './post-page.selector';

@Injectable()
export class PostPageEffects {

  resolvePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
      map((action) => action.payload),
      filter(payload => !!payload.event.url.match(/^\/posts-with-redux\/\d*/)),
      withLatestFrom(this.store.select(FromPostPageState.selectPost)),
      map(([payload, post]) => {
        const segment = payload.event.url.replace(/\/posts-with-redux\//, '').match(/\d*/);
        const postId = +segment[0];
        if (postId !== post?.id) {
          return loadPostAction({ postId });
        }
        return { type: 'NOPE_ACTION' };
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
              private store: Store<any>,
              private postService: PostService) {}
}
