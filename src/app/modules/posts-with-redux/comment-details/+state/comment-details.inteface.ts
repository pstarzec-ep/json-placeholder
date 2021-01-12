import { Comment } from '@app/models';

export const COMMENT_DETAILS_SATE = 'comment_details_state';

export interface ICommentDetailsPageState {
  comment: Comment;
}
