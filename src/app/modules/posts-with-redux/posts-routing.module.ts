import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsResolver } from './comments.resolver';
import { PostResolver } from './post.resolver';
import { PostsResolver } from './posts.resolver';
import { CommentResolver } from './comment.resolver';
import { PostsPageComponent, PostsPageModule } from './posts-page';
import { PostPageComponent, PostPageModule } from './post-page';
import { CommentsComponent, CommentsModule } from './comments';
import { CommentDetailsComponent } from '@app/modules/posts-with-router/comment-details';

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
  imports: [
    RouterModule.forChild(routes),
    PostsPageModule,
    PostPageModule,
    CommentsModule,
  ],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
