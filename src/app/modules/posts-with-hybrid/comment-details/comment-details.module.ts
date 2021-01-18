import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { COMMENT_DETAILS_SATE, CommentDetailsEffects, commentDetailsReducer } from './+state';
import { CommentDetailsComponent } from './comment-details.component';

@NgModule({
  declarations: [CommentDetailsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(COMMENT_DETAILS_SATE, commentDetailsReducer),
    EffectsModule.forFeature([CommentDetailsEffects]),
    RouterModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class CommentDetailsModule {}
