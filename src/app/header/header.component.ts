import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LanguageService } from '../language.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  @Output()
  public toggleNav = new EventEmitter<void>();

  constructor(public languageService: LanguageService, public appComponent: AppComponent, private route: ActivatedRoute, private location: Location) {
  }

  public get routes() {
    return this.appComponent.routes;
  }

  public languageNavigate(lang: string): void {
    this.location.go(`/Homes/${lang}`);
    console.log(this.route);
  }

  public toggleSidenav(): void {
    this.toggleNav.emit();
  }

}
