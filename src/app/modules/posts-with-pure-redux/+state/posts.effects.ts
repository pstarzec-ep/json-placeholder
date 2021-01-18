import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CommentService, PostService } from '@app/services';
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

@Injectable()
export class PostsEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(loadPostsAction),
    switchMap(action => this.postService.getPosts().pipe(
      map(posts => postsLoadedAction({ posts })),
      catchError(() => of(postsLoadFailAction())),
    )),
  ));

  loadPost$ = createEffect(() => this.actions$.pipe(
    ofType(loadPostAction),
    switchMap(action => this.postService.getPostById(action.postId).pipe(
      map(post => postLoadedAction({ post })),
      catchError(() => of(postLoadFailAction())),
    )),
  ));

  loadComments$ = createEffect(() => this.actions$.pipe(
    ofType(loadCommentsAction),
    switchMap(action => this.commentService.getCommentsForPost(action.postId).pipe(
      map(comments => commentsLoadedAction({ comments })),
      catchError(() => of(commentsLoadFailAction())),
    )),
  ));

  loadComment$ = createEffect(() => this.actions$.pipe(
    ofType(loadCommentDetailsAction),
    switchMap(action => this.commentService.getCommentsById(action.commentId).pipe(
      map(comment => commentDetailsLoadedAction({ comment })),
      catchError(() => of(commentDetailsLoadFailAction())),
    )),
  ));

  constructor(private actions$: Actions,
              private postService: PostService,
              private commentService: CommentService) {}
}
