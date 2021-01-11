import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PostsPageComponent,
    PostPageComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class PostsModule {}
