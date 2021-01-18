import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursivePathsComponent } from './recursive-paths.component';

const routes: Routes = [
  { path: '', component: RecursivePathsComponent },
  { path: ':id', loadChildren: () => import('./recursive-paths.module').then(m => m.RecursivePathsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursivePathsRoutingModule {}
