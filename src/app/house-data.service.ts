import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { House } from './common';
import { HOUSE_DATA } from './house-data';

@Injectable({
  providedIn: 'root'
})
export class HouseDataService {

  private houseData$ = new ReplaySubject<House[]>();
  public houseData!: Observable<House[]>;
  constructor() {
    this.houseData = this.houseData$.asObservable()
  }

  public getData(): void {
    // TODO: Implement caching and get request for data
    this.houseData$.next(HOUSE_DATA);
  }
}
