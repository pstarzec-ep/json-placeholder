import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheNumberResolver } from '@app/core';
import { NamedRoutersComponent } from './named-routers.component';

const routes: Routes = [
  {
    path: '', component: NamedRoutersComponent,
    resolve: { theNumber: TheNumberResolver }, // Here the resolver will be always called as only te paths are nested
    children: [
      {
        path: ':id',
        loadChildren: () => import('./named-routers.module').then(m => m.NamedRoutersModule),
        outlet: 'event',
      },
      {
        path: ':id',
        loadChildren: () => import('./named-routers.module').then(m => m.NamedRoutersModule),
        outlet: 'odd',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamedRoutersRoutingModule {}
