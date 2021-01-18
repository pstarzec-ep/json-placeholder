import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheNumberResolver } from '@app/core';
import { RecursiveChildrenPathsComponent } from './recursive-children-paths.component';

const routes: Routes = [
  {
    path: '', component: RecursiveChildrenPathsComponent,
    resolve: { theNumber: TheNumberResolver }, // Here the resolver will be always called as only te paths are nested
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
