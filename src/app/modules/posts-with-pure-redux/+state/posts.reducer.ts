import { createReducer, on } from '@ngrx/store';
import {
  commentDetailsLoadedAction,
  commentDetailsLoadFailAction,
  commentsLoadedAction,
  commentsLoadFailAction,
  loadCommentDetailsAction,
  loadCommentsAction,
  loadPostAction,
  loadPostsAction,
  postLoadedAction,
  postLoadFailAction,
  postsLoadedAction,
  postsLoadFailAction,
} from './posts.actions';
import { IPostsState } from './posts.inteface';

const init: IPostsState = {
  posts: [],
  post: null,
  comments: null,
  comment: null,
};

export function postsReducer(state, action): IPostsState {
  return reducer(state, action);
}

const reducer = createReducer(
  init,
  // Posts
  on(loadPostsAction),
  on(postsLoadedAction, (state, { posts }) => ({ ...state, ...{ posts } })),
  on(postsLoadFailAction),
  // Post
  on(loadPostAction, (state) => ({ ...state, ...{ post: null } })),
  on(postLoadedAction, (state, { post }) => ({ ...state, ...{ post } })),
  on(postLoadFailAction),
  // Comments
  on(loadCommentsAction),
  on(commentsLoadedAction, (state, { comments }) => ({ ...state, ...{ comments } })),
  on(commentsLoadFailAction),
  // Comment Details
  on(loadCommentDetailsAction, (state) => ({ ...state, ...{ comment: null } })),
  on(commentDetailsLoadedAction, (state, { comment }) => ({ ...state, ...{ comment } })),
  on(commentDetailsLoadFailAction),
);
