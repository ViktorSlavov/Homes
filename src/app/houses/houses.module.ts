import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses/houses.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HousesComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
    SharedModule  ]
})
export class HousesModule { }
