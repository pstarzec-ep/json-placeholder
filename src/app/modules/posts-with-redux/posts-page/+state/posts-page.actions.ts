import { createAction } from '@ngrx/store';

const loadPostsActionType = '[Posts Page] Load posts';
const postsLoadedActionType = '[Posts Page] Posts loaded';
const postsLoadFailFailActionType = '[Posts Page] Posts load fail';

export const loadPostsAction = createAction(loadPostsActionType);
export const postsLoadedAction = createAction(postsLoadedActionType);
export const postsLoadFailAction = createAction(postsLoadFailFailActionType);
