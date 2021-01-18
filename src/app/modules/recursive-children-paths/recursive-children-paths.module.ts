import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursiveChildrenPathsRoutingModule } from './recursive-children-paths-routing.module';
import { RecursiveChildrenPathsComponent } from './recursive-children-paths.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [RecursiveChildrenPathsComponent],
  imports: [
    CommonModule,
    RecursiveChildrenPathsRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class RecursiveChildrenPathsModule { }
