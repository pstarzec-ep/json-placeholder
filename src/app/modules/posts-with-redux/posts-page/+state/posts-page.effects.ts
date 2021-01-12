import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '@app/services';
import { loadPostsAction, postsLoadedAction, postsLoadFailAction } from './posts-page.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PostsPageEffects {

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
