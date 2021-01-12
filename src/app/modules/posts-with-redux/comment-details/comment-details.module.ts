import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentDetailsComponent } from './comment-details.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CommentDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class CommentDetailsModule {}
