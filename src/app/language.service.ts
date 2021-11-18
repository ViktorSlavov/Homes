import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Language } from './common';
import { LocaleResources, ResourceStrings } from './resource-strings';

const BASE_URL = 'http://localhost:3000/';
const CONTENT = "content";
const DETAILS = "details";

interface ContentResponse {
  language: Language,
  pages: LocaleResources
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _currentLanguage: Language = 'EN';
  public resources!: {[key in Language]: LocaleResources };

  public get currentLanguage(): Language {
    return this._currentLanguage;
  }

  private languageChange$ = new Subject<Language>();
  public languageChange!: Observable<Language>;

  private dataChange$= new ReplaySubject<void>();
  public dataChange!: Observable<void>;

  constructor(private httpClient: HttpClient) {
    this.languageChange = this.languageChange$.asObservable();
    this.dataChange = this.dataChange$.asObservable();
  }


  public getData(): void {
    this.httpClient.get<ContentResponse[]>(`${BASE_URL}${CONTENT}`).subscribe((res) => {
      res.forEach(e => {
        if (!this.resources) {
          this.resources = {} as any;
        }
        this.resources[e.language] = e.pages;
      });
      this.dataChange$.next();
    });
  }

  public getResources(type: string): ResourceStrings {
    if (this.resources && this.resources[this._currentLanguage]) {
      return this.resources[this._currentLanguage][type];
    } else {
      return {};
    }
  }

  public changeLanguage(lang: Language) {
    this._currentLanguage = lang;
    this.languageChange$.next(lang);
  }
}
