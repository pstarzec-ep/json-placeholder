import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsPageComponent, PostsPageModule } from './posts-page';
import { PostPageComponent, PostPageModule } from './post-page';
import { CommentsComponent, CommentsModule } from './comments';
import { CommentDetailsComponent, CommentDetailsModule } from './comment-details';

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
