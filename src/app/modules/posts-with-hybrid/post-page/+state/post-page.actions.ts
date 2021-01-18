import { createAction, props } from '@ngrx/store';
import { Post } from '@app/models';

const loadPostActionType = '[Post Page] Load post';
const postLoadedActionType = '[Post Page] Post loaded';
const postLoadFailFailActionType = '[Post Page] Post load fail';

export const loadPostAction = createAction(loadPostActionType, props<{ postId: number }>());
export const postLoadedAction = createAction(postLoadedActionType, props<{ post: Post }>());
export const postLoadFailAction = createAction(postLoadFailFailActionType);

export type PostActions = typeof loadPostAction | typeof postLoadedAction | typeof postLoadFailAction;
