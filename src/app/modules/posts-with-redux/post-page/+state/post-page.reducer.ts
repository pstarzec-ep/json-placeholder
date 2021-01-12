import { createReducer, on } from '@ngrx/store';
import { loadPostAction, postLoadedAction, postLoadFailAction } from './post-page.actions';
import { IPostPageState } from './post-page.inteface';

const init: IPostPageState = {
  post: null,
};

export function postPageReducer(state, action): IPostPageState {
  return reducer(state, action);
}

const reducer = createReducer(
  init,
  on(loadPostAction),
  on(postLoadedAction, (state, { post }) => ({ ...state, ...{ post } })),
  on(postLoadFailAction),
);
