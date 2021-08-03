import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/base-component/base-component.component';
import { HouseDataService } from 'src/app/house-data.service';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent extends Base implements OnInit {

  constructor(protected languageService: LanguageService, protected houseData: HouseDataService) {
    super(languageService);
  }

  ngOnInit(): void {
    this.houseData.getData();
  }

}
