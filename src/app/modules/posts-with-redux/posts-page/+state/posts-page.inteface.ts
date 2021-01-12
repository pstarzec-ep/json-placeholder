import { Post } from '@app/models';
import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const POSTS_PAGE_SATE = 'post_page_state';

export interface IPostsPageState {
  posts: Post[];
}
