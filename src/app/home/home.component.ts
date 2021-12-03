import { Component, ElementRef, ViewChild } from '@angular/core';
import { House } from '../common';
import { HouseDataService } from '../house-data.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('scrollTarget')
  public scrollTarget!: ElementRef<any>;

  protected resourceKey: string = 'home';
  public houses!: House[];

  constructor(protected housesService: HouseDataService, public modal: ModalService) {
  }

  public ngOnInit(): void {
    this.housesService.houseData.subscribe((ha) => {
      this.houses = ha.filter(h => h.available);
    });
    this.housesService.getData();
  }

  public scrollIntoView(): void {
    
  }
}
