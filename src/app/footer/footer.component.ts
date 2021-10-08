import { Component, OnInit } from '@angular/core';
import { Base } from '../base-component/base-component.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends Base implements OnInit {
  resourceKey = 'footer';
}
