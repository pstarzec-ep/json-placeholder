import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';


@NgModule({
  declarations: [
    PostsPageComponent,
    PostPageComponent,
    CommentsComponent,
    CommentDetailsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class PostsModule {}
