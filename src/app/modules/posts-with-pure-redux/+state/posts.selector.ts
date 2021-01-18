import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostsState, POSTS_SATE } from './posts.inteface';

const featureSelector = createFeatureSelector<IPostsState>(POSTS_SATE);

export class FromPostsState {
  public static selectPosts = createSelector(
    featureSelector,
    state => state.posts,
  );

  public static selectPost = createSelector(
    featureSelector,
    state => state.post,
  );

  public static selectComments = createSelector(
    featureSelector,
    state => state.comments,
  );

  public static selectComment = createSelector(
    featureSelector,
    state => state.comment,
  );
}
