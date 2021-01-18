import { createReducer, on } from '@ngrx/store';
import { loadCommentDetailsAction, commentDetailsLoadedAction, commentDetailsLoadFailAction } from './comment-details.actions';
import { ICommentDetailsPageState } from './comment-details.inteface';

const init: ICommentDetailsPageState = {
  comment: null,
};

const reducer = createReducer(
  init,
  on(loadCommentDetailsAction, (state) => ({ ...state, ...{ comment: null } })),
  on(commentDetailsLoadedAction, (state, { comment }) => ({ ...state, ...{ comment } })),
  on(commentDetailsLoadFailAction),
);

export function commentDetailsReducer(state, action): ICommentDetailsPageState {
  return reducer(state, action);
}
