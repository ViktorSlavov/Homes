import { Component, ElementRef, ViewChild } from '@angular/core';
import { Base } from '../base-component/base-component.component';
import { House } from '../common';
import { HouseDataService } from '../house-data.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Base {

  @ViewChild('scrollTarget')
  public scrollTarget!: ElementRef<any>;

  protected resourceKey: string = 'home';
  public houses!: House[];

  constructor(protected languageService: LanguageService, protected housesService: HouseDataService) {
    super(languageService);
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.housesService.houseData.subscribe((ha) => {
      this.houses = ha.filter(h => h.available);
    });
    this.housesService.getData();
  }

  scrollIntoView(): void {
    
  }
}
