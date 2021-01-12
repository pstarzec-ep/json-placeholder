import { createReducer, on } from '@ngrx/store';
import { loadPostsAction, postsLoadedAction, postsLoadFailAction } from './posts-page.actions';
import { IPostsPageState } from './posts-page.inteface';

const init: IPostsPageState = {
  posts: [],
};

export function postsPageReducer(state, action): IPostsPageState {
  return reducer(state, action);
}

const reducer = createReducer(
  init,
  on(loadPostsAction),
  on(postsLoadedAction),
  on(postsLoadFailAction),
);
