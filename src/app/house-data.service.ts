import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { House } from './common';
import { HOUSE_DATA } from './house-data';

@Injectable({
  providedIn: 'root'
})
export class HouseDataService {

  private lastData: House[] = [];
  private houseData$ = new ReplaySubject<House[]>();
  public houseData!: Observable<House[]>;
  constructor(private httpClient: HttpClient) {
    this.houseData = this.houseData$.asObservable();

  }

  public getData(): Promise<void> {
    // this.httpClient.post<{ data: House[] }>('http://localhost:3000/api/houses', {}).subscribe((res: { data: House[] }) => {
    //   this.lastData = res.data;
    // });
    return new Promise((res, rej) => {
      this.lastData = HOUSE_DATA;
      this.houseData$.next(this.lastData);
      res();
    });
  }

  public findHouse(houseId: string): House | undefined {
    return this.lastData.find(h => h.id === houseId);
  }
}
