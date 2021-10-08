import { Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Base } from 'src/app/base-component/base-component.component';
import { House } from 'src/app/common';
import { HouseDataService } from 'src/app/house-data.service';
import { LanguageService } from 'src/app/language.service';
import { HouseListComponent } from '../house-list/house-list.component';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent extends Base implements OnInit, OnDestroy {

  public resourceKey = 'filter';
  public filterForm!: FormGroup;

  // TODO: get these from resource service
  public priceOptions!: string[];

  @HostBinding('class.houses')
  public cssClass = true;

  public houses!: Observable<House[]>;

  constructor(
    protected languageService: LanguageService,
    protected houseService: HouseDataService,
    protected fb: FormBuilder
  ) {
    super(languageService);
  }

  protected languageSubHandler = () => {
    let currentPriceIndex = this.priceOptions.findIndex((e) => e === this.filterForm?.get('price')?.value);
    this.resourceStrings = this.languageService.getResources(this.resourceKey);
    this.priceOptions = [this.resourceStrings.priceTotal, this.resourceStrings.costPerSQM];
    currentPriceIndex = currentPriceIndex !== -1 ? currentPriceIndex : 0;
    this.filterForm?.patchValue({ price: this.priceOptions[currentPriceIndex] });
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.houseService.getData();
    this.priceOptions = [this.resourceStrings.priceTotal, this.resourceStrings.costPerSQM];
    this.houses = this.houseService.houseData;
    this.filterForm = this.fb.group({
      minSQM: [],
      maxSQM: [],
      minPrice: [],
      maxPrice: [],
      price: [this.priceOptions[0]]
    });
    
  }

}
