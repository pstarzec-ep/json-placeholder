import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostsPageState, POSTS_PAGE_SATE } from './posts-page.inteface';

const featureSelector = createFeatureSelector<IPostsPageState>(POSTS_PAGE_SATE);

export class FromPostsPageState {
  public static selectPost = createSelector(
    featureSelector,
    state => state.posts,
  );
}
