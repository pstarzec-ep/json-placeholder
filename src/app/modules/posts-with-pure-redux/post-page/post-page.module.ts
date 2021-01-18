import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostPageComponent } from './post-page.component';

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    PostPageComponent,
  ],
})
export class PostPageModule {}
