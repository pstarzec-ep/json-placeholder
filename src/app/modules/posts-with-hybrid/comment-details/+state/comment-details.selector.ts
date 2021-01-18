import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICommentDetailsPageState, COMMENT_DETAILS_SATE } from './comment-details.inteface';

const featureSelector = createFeatureSelector<ICommentDetailsPageState>(COMMENT_DETAILS_SATE);

export class FromCommentDetailsState {
  public static selectComment = createSelector(
    featureSelector,
    state => state.comment,
  );
}
