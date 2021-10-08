import { Component, OnInit } from '@angular/core';
import { Base } from '../base-component/base-component.component';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent extends Base {
  public resourceKey = 'errorPage';
}
