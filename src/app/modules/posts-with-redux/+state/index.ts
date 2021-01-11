import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { filter, map } from 'rxjs/operators';
import { PostActions } from '@app/modules/posts-with-redux/posts-page/+state';

@Injectable()
export class PostsDataResolver {

  postsResolver$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    filter((action: RouterNavigatedAction) => action.payload.event.url === '/posts-with-redux'),
    map(() => PostActions.load()),
  ));

  constructor(private actions$: Actions) {}
}
