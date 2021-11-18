import { Component, HostBinding, OnInit } from '@angular/core';
import { LanguageService } from './language.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  @HostBinding('class.content')
  public class = "content";

  constructor(public languageService: LanguageService) {
  }

  public ngOnInit(): void {
    this.languageService.getData();
  }
}