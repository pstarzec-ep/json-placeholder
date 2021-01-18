import { createAction, props } from '@ngrx/store';
import { Post } from '@app/models';

const loadPostsActionType = '[Posts Page] Load posts';
const postsLoadedActionType = '[Posts Page] Posts loaded';
const postsLoadFailFailActionType = '[Posts Page] Posts load fail';

export const loadPostsAction = createAction(loadPostsActionType);
export const postsLoadedAction = createAction(postsLoadedActionType, props<{ posts: Post[] }>());
export const postsLoadFailAction = createAction(postsLoadFailFailActionType);
