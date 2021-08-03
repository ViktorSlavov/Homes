import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses/houses.component';
import { HouseFilterPipe } from './house-filter.pipe';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseComponent } from './house/house.component';


@NgModule({
  declarations: [
    HousesComponent,
    HouseFilterPipe,
    HouseListComponent,
    HouseComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule
  ]
})
export class HousesModule { }
