import { Component } from '@angular/core';

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