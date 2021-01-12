import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { PostsPageComponent } from './posts-page.component';
import { POSTS_PAGE_SATE, postsPageReducer } from './+state';

@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(POSTS_PAGE_SATE, postsPageReducer),
    MatListModule,
    RouterModule,
  ],
})
export class PostsPageModule {}
