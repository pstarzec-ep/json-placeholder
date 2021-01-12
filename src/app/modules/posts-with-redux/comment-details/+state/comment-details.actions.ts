import { createAction, props } from '@ngrx/store';
import { Comment } from '@app/models';

const loadCommentDetailsActionType = '[Comment Details Page] Load commentDetails';
const commentDetailsLoadedActionType = '[Comment Details Page] CommentDetails loaded';
const commentDetailsLoadFailFailActionType = '[Comment Details Page] CommentDetails load fail';

export const loadCommentDetailsAction = createAction(loadCommentDetailsActionType, props<{ commentId: number }>());
export const commentDetailsLoadedAction = createAction(commentDetailsLoadedActionType, props<{ comment: Comment }>());
export const commentDetailsLoadFailAction = createAction(commentDetailsLoadFailFailActionType);
