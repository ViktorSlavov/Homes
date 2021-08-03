import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { HousesComponent } from './houses/houses.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/houses' },
  { path: '/houses', component: HousesComponent },
  {
    path: '/house', component: HouseComponent, children: [{
      path: '/house/:id',
      component: HouseComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
