import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { PostPageModule } from './post-page/post-page.module';
import { PostsPageModule } from './posts-page/posts-page.module';
import { CommentsModule } from './comments/comments.module';
import { CommentDetailsModule } from './comment-details/comment-details.module';

const routes: Routes = [
  { path: '', component: PostsPageComponent },
  {
    path: ':postId', component: PostPageComponent,
    children: [
      { path: 'comments', component: CommentsComponent },
      { path: 'comment/:commentId', component: CommentDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    PostsPageModule,
    PostPageModule,
    CommentsModule,
    CommentDetailsModule,
  ],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
