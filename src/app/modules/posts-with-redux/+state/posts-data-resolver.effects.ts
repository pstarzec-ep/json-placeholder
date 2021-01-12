import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { filter, map } from 'rxjs/operators';
import { PostsActions } from '../posts-page/+state';
import { PostActions } from '../post-page/+state';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class PostsDataResolverEffects {

  postsResolver$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    filter((action: RouterNavigatedAction) => action.payload.event.url === '/posts-with-redux'),
    map(() => PostsActions.load()),
  ));

  postResolver$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    filter((action: RouterNavigatedAction) => !!action.payload.event.url.match(/\/posts-with-redux\/\d*/)),
    map((action: RouterNavigatedAction) => {
      const postId = +this.findParam(action.payload.routerState.root, 'postId');
      return PostActions.load({ postId });
    }),
  ));

  private findParam(snapshot: ActivatedRouteSnapshot, param: string): string {
    const foundParam = snapshot.params?.[param];
    if (!foundParam) {
      return this.findParam(snapshot.firstChild, param);
    }
    return foundParam;
  }

  constructor(private actions$: Actions) {}
}
