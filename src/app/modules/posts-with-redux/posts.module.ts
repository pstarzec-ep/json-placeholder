import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { POSTS_PAGE_STATE, postsReducer, PostsEffects } from './posts-page/+state';
import { EffectsModule } from '@ngrx/effects';
import { PostsDataResolver } from './+state';

@NgModule({
  declarations: [
    PostsPageComponent,
    PostPageComponent,
    CommentsComponent,
    CommentDetailsComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(POSTS_PAGE_STATE, postsReducer),
    EffectsModule.forFeature([PostsDataResolver, PostsEffects]),
    PostsRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class PostsModule {}
