import { createAction, props } from '@ngrx/store';
import { Comment } from '@app/models';

const loadCommentsActionType = '[Comments Page] Load comments';
const commentsLoadedActionType = '[Comments Page] Comments loaded';
const commentsLoadFailFailActionType = '[Comments Page] Comments load fail';

export const loadCommentsAction = createAction(loadCommentsActionType, props<{ postId: number }>());
export const commentsLoadedAction = createAction(commentsLoadedActionType, props<{ comments: Comment[] }>());
export const commentsLoadFailAction = createAction(commentsLoadFailFailActionType);
