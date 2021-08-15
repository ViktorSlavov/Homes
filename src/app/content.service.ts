import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { ResourceStrings } from './resource-strings';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public content!: Observable<ResourceStrings>;
  private content$: ReplaySubject<ResourceStrings> = new ReplaySubject<ResourceStrings>();
  constructor() {
    this.content = this.content$.asObservable();
  }

  getData(): void {
    this.content$.next();
  }
}
