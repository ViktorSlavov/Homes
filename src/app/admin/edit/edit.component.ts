import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private languageService: LanguageService) {

  }

  public get resources(): any {
    if (!this.languageService.resources ||!this.languageService.resources['BG'] || !this.languageService.resources['EN']) {
      return { BG: {}, EN: {} };
    }
    return this.languageService.resources;
  }

  ngOnInit(): void {
  }

}
