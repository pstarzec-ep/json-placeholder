import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsRouterComponent } from './posts-router.component';

const routes: Routes = [
  { path: '', component: PostsRouterComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
