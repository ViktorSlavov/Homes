import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  @Output()
  public toggleNav = new EventEmitter<void>();

  constructor(public languageService: LanguageService, public appComponent: AppComponent) {
  }

  public get routes() {
    return this.appComponent.routes;
  }

  public languageNavigate(lang: string): void {
    const urlSegment = window.location.toString().split("://")[1];
    const currentPageSegments = urlSegment.split("/");
    const currentLang = currentPageSegments[1];
    console.log("Current language, ", currentLang);
    currentPageSegments[1] = lang;
    window.location.replace([urlSegment[0], currentPageSegments.join("/")].join("://"))
  }

  public toggleSidenav(): void {
    this.toggleNav.emit();
  }

}
