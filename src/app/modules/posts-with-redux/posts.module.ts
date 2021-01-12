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
import { PostsDataResolverEffects } from './+state';
import { PostEffects, postReducer, POST_PAGE_STATE } from './post-page/+state';
import { COMMENTS_STATE, CommentsEffects, commentsReducer } from './comments/+state';

@NgModule({
  declarations: [
    PostsPageComponent,
    PostPageComponent,
    CommentsComponent,
    CommentDetailsComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(POSTS_PAGE_STATE, postsReducer), // TODO separate module
    StoreModule.forFeature(POST_PAGE_STATE, postReducer), // TODO separate module
    StoreModule.forFeature(COMMENTS_STATE, commentsReducer), // TODO separate module
    EffectsModule.forFeature([
      PostsDataResolverEffects,
      PostsEffects, // TODO separate module
      PostEffects, // TODO separate module
      CommentsEffects, // TODO separate module
    ]),
    PostsRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class PostsModule {}
