import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'posts-with-router', loadChildren: () => import('./modules/posts-with-router').then(m => m.PostsModule) },
  { path: 'posts-with-redux', loadChildren: () => import('./modules/posts-with-redux').then(m => m.PostsModule) },
  { path: 'recursive-paths', loadChildren: () => import('./modules/recursive-paths').then(m => m.RecursivePathsModule) },
  {
    path: 'recursive-children-paths',
    loadChildren: () => import('./modules/recursive-children-paths').then(m => m.RecursiveChildrenPathsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
