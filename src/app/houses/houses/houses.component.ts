import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {
  @HostBinding('class.houses')
  public cssClass = true;
}
