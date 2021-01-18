import { createAction, props } from '@ngrx/store';
import { Comment, Post } from '@app/models';

// Posts
const loadPostsActionType = '[Posts] Load posts';
const postsLoadedActionType = '[Posts] Posts loaded';
const postsLoadFailFailActionType = '[Posts] Posts load fail';

export const loadPostsAction = createAction(loadPostsActionType);
export const postsLoadedAction = createAction(postsLoadedActionType, props<{ posts: Post[] }>());
export const postsLoadFailAction = createAction(postsLoadFailFailActionType);

// Post
const loadPostActionType = '[Post Page] Load post';
const postLoadedActionType = '[Post Page] Post loaded';
const postLoadFailFailActionType = '[Post Page] Post load fail';

export const loadPostAction = createAction(loadPostActionType, props<{ postId: number }>());
export const postLoadedAction = createAction(postLoadedActionType, props<{ post: Post }>());
export const postLoadFailAction = createAction(postLoadFailFailActionType);

export type PostActions = typeof loadPostAction | typeof postLoadedAction | typeof postLoadFailAction;

// Comments

const loadCommentsActionType = '[Comments Page] Load comments';
const commentsLoadedActionType = '[Comments Page] Comments loaded';
const commentsLoadFailFailActionType = '[Comments Page] Comments load fail';

export const loadCommentsAction = createAction(loadCommentsActionType, props<{ postId: number }>());
export const commentsLoadedAction = createAction(commentsLoadedActionType, props<{ comments: Comment[] }>());
export const commentsLoadFailAction = createAction(commentsLoadFailFailActionType);

// Comment Details

const loadCommentDetailsActionType = '[Comment Details Page] Load commentDetails';
const commentDetailsLoadedActionType = '[Comment Details Page] CommentDetails loaded';
const commentDetailsLoadFailFailActionType = '[Comment Details Page] CommentDetails load fail';

export const loadCommentDetailsAction = createAction(loadCommentDetailsActionType, props<{ commentId: number }>());
export const commentDetailsLoadedAction = createAction(commentDetailsLoadedActionType, props<{ comment: Comment }>());
export const commentDetailsLoadFailAction = createAction(commentDetailsLoadFailFailActionType);
