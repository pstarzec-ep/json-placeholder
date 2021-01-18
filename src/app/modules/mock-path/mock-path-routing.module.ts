import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MockDataResolver } from './mock-data.resolver';

const routes: Routes = [
  {
    path: 'recursive-paths', loadChildren: () => import('../recursive-paths').then(m => m.RecursivePathsModule),
    resolve: { mockData: MockDataResolver },
  },
  {
    path: 'recursive-children-paths', loadChildren: () => import('../recursive-children-paths').then(m => m.RecursiveChildrenPathsModule),
    resolve: { mockData: MockDataResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MockPathRoutingModule {}
