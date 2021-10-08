import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Base } from 'src/app/base-component/base-component.component';
import { House } from 'src/app/common';
import { HouseDataService } from 'src/app/house-data.service';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent extends Base implements OnInit {

  public resourceKey = 'house';

  public house?: House;

  constructor(
    protected languageService: LanguageService,
    protected houseData: HouseDataService,
    protected route: ActivatedRoute
  ) {
    super(languageService);
  }

  public ngOnInit(): void {
    super.ngOnInit();
    let houseId: string = '';
    this.route.paramMap.subscribe(params => {
      houseId = params.get('id') || '';
    });
    this.houseData.getData().then(() => {
      if (houseId) {
        this.house = this.houseData.findHouse(houseId);
      }
    });
  }

}
