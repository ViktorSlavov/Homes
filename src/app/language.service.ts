import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Language } from './common';
import { Resources, ResourceStrings } from './resource-strings';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: Language = 'EN';

  private languageChange$ = new Subject<Language>();
  public languageChange: Observable<Language>;

  constructor() {
    this.languageChange = this.languageChange$.asObservable()
  }

  public getResources(type: string): ResourceStrings {
    return Resources[this.currentLanguage][type];
  }

  public changeLanguage(lang: Language) {
    this.currentLanguage = lang;
    this.languageChange$.next(lang);
  }
}
