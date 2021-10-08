import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses/houses.component';
import { HouseFilterPipe } from './house-filter.pipe';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseTileComponent } from './house/house.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { HouseDetailsComponent } from './house-details/house-details.component';

@NgModule({
  declarations: [
    HousesComponent,
    HouseFilterPipe,
    HousesComponent,
    HouseListComponent,
    HouseTileComponent,
    HouseDetailsComponent 
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule
  ]
})
export class HousesModule { }
