import { Post } from '@app/models';
import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const POST_PAGE_SATE = 'post_page_state';

export interface IPostPageState {
  post: Post;
}
