import { createReducer, on } from '@ngrx/store';
import { loadCommentsAction, commentsLoadedAction, commentsLoadFailAction } from './comments.actions';
import { ICommentsPageState } from './comments.inteface';

const init: ICommentsPageState = {
  comments: [],
};

export function commentsReducer(state, action): ICommentsPageState {
  return reducer(state, action);
}

const reducer = createReducer(
  init,
  on(loadCommentsAction),
  on(commentsLoadedAction, (state, { comments }) => ({ ...state, ...{ comments } })),
  on(commentsLoadFailAction),
);
