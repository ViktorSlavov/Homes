import { Component, HostBinding } from '@angular/core';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {
  constructor(public modal: ModalService) {
    
  }
  @HostBinding('class.houses')
  public cssClass = true;
}
