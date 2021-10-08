import { Component, HostBinding } from '@angular/core';
import { LanguageService } from './language.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  @HostBinding('class.content')
  public class = "content";

  constructor(public languageService: LanguageService) {
  }
}