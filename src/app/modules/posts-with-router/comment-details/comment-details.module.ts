import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { CommentDetailsComponent } from './comment-details.component';

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
