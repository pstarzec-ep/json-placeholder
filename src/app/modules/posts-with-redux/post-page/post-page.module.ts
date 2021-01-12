import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { POST_PAGE_STATE, PostEffects, postReducer } from './+state';
import { PostPageComponent } from './post-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PostPageComponent],
  imports: [
    CommonModule,
    // StoreModule.forFeature(POST_PAGE_STATE, postReducer),
    // EffectsModule.forFeature([
    //   PostEffects,
    // ]),
    RouterModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class PostPageModule {}
