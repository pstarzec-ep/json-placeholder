import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsResolver } from './comments.resolver';
import { PostPageComponent } from './post-page/post-page.component';
import { PostResolver } from './post.resolver';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostsResolver } from './posts.resolver';
import { CommentsComponent } from './comments/comments.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CommentResolver } from './comment.resolver';

const routes: Routes = [
  { path: '', component: PostsPageComponent, resolve: { posts: PostsResolver } },
  {
    path: ':postId', component: PostPageComponent, resolve: { post: PostResolver },
    children: [
      { path: 'comments', component: CommentsComponent, resolve: { comments: CommentsResolver } },
      { path: 'comment/:commentId', component: CommentDetailsComponent, resolve: { comment: CommentResolver } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
