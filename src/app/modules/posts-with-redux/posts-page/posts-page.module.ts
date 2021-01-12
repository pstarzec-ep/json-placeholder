import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageComponent } from './posts-page.component';
import { StoreModule } from '@ngrx/store';
import { POSTS_PAGE_STATE, PostsEffects, postsReducer } from './+state';
import { EffectsModule } from '@ngrx/effects';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(POSTS_PAGE_STATE, postsReducer),
    EffectsModule.forFeature([
      PostsEffects,
    ]),
    RouterModule,
    MatListModule,
  ],
})
export class PostsPageModule {}
