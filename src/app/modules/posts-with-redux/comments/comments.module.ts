import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { COMMENTS_SATE, CommentsEffects, commentsReducer } from './+state';
import { CommentsComponent } from './comments.component';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(COMMENTS_SATE, commentsReducer),
    EffectsModule.forFeature([CommentsEffects]),
    RouterModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class CommentsModule {}
