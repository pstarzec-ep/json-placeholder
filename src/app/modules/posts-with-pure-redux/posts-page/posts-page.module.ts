import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { PostsPageComponent } from './posts-page.component';

@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    MatListModule,
  ],
  exports: [
    PostsPageComponent,
  ],
})
export class PostsPageModule {}
