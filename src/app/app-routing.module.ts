import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'posts-with-router', loadChildren: () => import('./modules/posts-with-router').then(m => m.PostsModule) },
  { path: 'posts-with-redux', loadChildren: () => import('./modules/posts-with-redux').then(m => m.PostsModule) },
  { path: 'named-routers', loadChildren: () => import('./modules/named-routers').then(m => m.NamedRoutersModule) },
  { path: 'mock-paths', loadChildren: () => import('./modules/mock-path').then(m => m.MockPathModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
