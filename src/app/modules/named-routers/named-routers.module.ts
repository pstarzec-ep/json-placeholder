import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NamedRoutersRoutingModule } from './named-routers-routing.module';
import { NamedRoutersComponent } from './named-routers.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [NamedRoutersComponent],
  imports: [
    CommonModule,
    NamedRoutersRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class NamedRoutersModule { }
