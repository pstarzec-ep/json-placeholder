import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { PostsPageComponent } from './posts-page.component';

@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
  ],
})
export class PostsPageModule {}
