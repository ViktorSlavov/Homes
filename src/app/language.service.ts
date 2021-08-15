import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Language } from './common';
import { Resources, ResourceStrings } from './resource-strings';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _currentLanguage: Language = 'EN';

  public get currentLanguage(): Language {
    return this._currentLanguage;
  }

  private languageChange$ = new Subject<Language>();
  public languageChange: Observable<Language>;

  constructor() {
    this.languageChange = this.languageChange$.asObservable()
  }

  public getResources(type: string): ResourceStrings {
    return Resources[this._currentLanguage][type];
  }

  public changeLanguage(lang: Language) {
    this._currentLanguage = lang;
    this.languageChange$.next(lang);
  }
}
