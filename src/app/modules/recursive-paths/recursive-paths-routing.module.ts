import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheNumberResolver } from '@app/core';
import { RecursivePathsComponent } from './recursive-paths.component';

const routes: Routes = [
  {
    path: '', component: RecursivePathsComponent,
    resolve: { theNumber: TheNumberResolver }, // Here the resolver will be called only once as only te last path will call it
  },
  {
    path: ':id',
    loadChildren: () => import('./recursive-paths.module').then(m => m.RecursivePathsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursivePathsRoutingModule {}
