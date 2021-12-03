import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses/houses.component';
import { HouseFilterPipe } from './house-filter.pipe';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseTileComponent } from './house/house.component';

import { SharedModule } from '../shared/shared.module';

import { HouseDetailsComponent } from './house-details/house-details.component';
import { HouseFilterComponent } from './house_filter/house-filter.component';

@NgModule({
  declarations: [
    HousesComponent,
    HouseFilterPipe,
    HousesComponent,
    HouseListComponent,
    HouseTileComponent,
    HouseDetailsComponent,
    HouseFilterComponent 
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
    SharedModule  ]
})
export class HousesModule { }
