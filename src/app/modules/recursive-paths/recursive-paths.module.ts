import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursivePathsRoutingModule } from './recursive-paths-routing.module';
import { RecursivePathsComponent } from './recursive-paths.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [RecursivePathsComponent],
  imports: [
    CommonModule,
    RecursivePathsRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class RecursivePathsModule {}
