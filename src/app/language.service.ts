import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _currentLanguage: string = 'EN';

  public get currentLanguage(): string {
    return this._currentLanguage;
  }

  private languageChange$ = new Subject<string>();
  public languageChange!: Observable<string>;

  constructor() {
    this.languageChange = this.languageChange$.asObservable();
  }

  public changeLanguage(lang: string) {
    this._currentLanguage = lang;
  }
}
