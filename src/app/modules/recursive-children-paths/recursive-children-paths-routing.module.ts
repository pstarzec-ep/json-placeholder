import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursiveChildrenPathsComponent } from './recursive-children-paths.component';

const routes: Routes = [
  {
    path: '', component: RecursiveChildrenPathsComponent,
    children: [
      {
        path: ':id',
        loadChildren: () => import('./recursive-children-paths.module').then(m => m.RecursiveChildrenPathsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursiveChildrenPathsRoutingModule {}
