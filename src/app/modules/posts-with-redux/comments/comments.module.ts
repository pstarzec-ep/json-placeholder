import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { StoreModule } from '@ngrx/store';
import { COMMENTS_STATE, CommentsEffects, commentsReducer } from './+state';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(COMMENTS_STATE, commentsReducer),
    EffectsModule.forFeature([
      CommentsEffects,
    ]),
    MatCardModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class CommentsModule {}
