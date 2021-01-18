import { Comment, Post } from '@app/models';

export const POSTS_SATE = 'pure_redux_posts_page_state';

export interface IPostsState {
  posts: Post[];
  post: Post;
  comments: Comment[];
  comment: Comment;
}
