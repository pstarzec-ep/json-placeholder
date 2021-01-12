import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICommentsPageState, COMMENTS_SATE } from './comments.inteface';

const featureSelector = createFeatureSelector<ICommentsPageState>(COMMENTS_SATE);

export class FromCommentsState {
  public static selectComments = createSelector(
    featureSelector,
    state => state.comments,
  );
}
