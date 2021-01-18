import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommentsComponent } from './comments.component';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    CommentsComponent,
  ],
})
export class CommentsModule {}
