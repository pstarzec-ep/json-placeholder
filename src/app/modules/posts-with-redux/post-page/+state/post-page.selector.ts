import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostPageState, POST_PAGE_SATE } from './post-page.inteface';

const featureSelector = createFeatureSelector<IPostPageState>(POST_PAGE_SATE);

export class FromPostPageState {
  public static selectPost = createSelector(
    featureSelector,
    state => state.post,
  );
}
