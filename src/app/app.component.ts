import { Component } from '@angular/core';
import { LanguageService } from './language.service';

interface Route {
  route: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public languageService: LanguageService) {
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
  }]
}