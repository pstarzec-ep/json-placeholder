import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { POST_PAGE_SATE, PostPageEffects, postPageReducer } from './+state';
import { PostPageComponent } from './post-page.component';

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(POST_PAGE_SATE, postPageReducer),
    EffectsModule.forFeature([PostPageEffects]),
    RouterModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class PostPageModule {}
