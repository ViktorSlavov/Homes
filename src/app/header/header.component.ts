import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Base } from '../base-component/base-component.component';
import { LanguageService } from '../language.service';

interface Route {
  route: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends Base implements OnInit {


  @Output()
  public toggleNav = new EventEmitter<void>();

  constructor(public languageService: LanguageService) {
    super(languageService);
  }

  public routes: Route[] = [{
    route: '/houses',
    name: 'Houses'
  }, {
    route: '/about-us',
    name: 'About Us'
  },
  {
    route: '/home',
    name: 'Home'
  }];

  public toggleSidenav(): void {
    this.toggleNav.emit();
  }

  public ngOnInit(): void {
    super.ngOnInit();
    console.log(window);
  }
}
