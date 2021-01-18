import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommentDetailsComponent } from './comment-details.component';

@NgModule({
  declarations: [CommentDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    CommentDetailsComponent,
  ],
})
export class CommentDetailsModule {}
