import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { POSTS_SATE, PostsEffects, postsReducer } from './+state';
import { PostsPageModule } from './posts-page';
import { PostPageModule } from './post-page';
import { CommentsModule } from './comments';
import { CommentDetailsModule } from './comment-details';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(POSTS_SATE, postsReducer),
    EffectsModule.forFeature([PostsEffects]),
    PostsPageModule,
    PostPageModule,
    CommentsModule,
    CommentDetailsModule,
    CommentDetailsModule,
  ],
  declarations: [PostsComponent],
})
export class PostsModule {}
