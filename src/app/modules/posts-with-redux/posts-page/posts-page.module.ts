import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { POSTS_PAGE_SATE, PostsPageEffects, postsPageReducer } from './+state';
import { PostsPageComponent } from './posts-page.component';

@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(POSTS_PAGE_SATE, postsPageReducer),
    EffectsModule.forFeature([PostsPageEffects]),
    MatListModule,
    RouterModule,
  ],
})
export class PostsPageModule {}
