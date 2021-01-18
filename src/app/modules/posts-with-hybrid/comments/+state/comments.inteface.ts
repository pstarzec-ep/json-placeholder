import { Comment, Post } from '@app/models';
import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const COMMENTS_SATE = 'comments_state';

export interface ICommentsPageState {
  comments: Comment[];
}
