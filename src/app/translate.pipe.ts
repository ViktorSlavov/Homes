import { Pipe, PipeTransform } from '@angular/core';
import { Language } from './common';
import { LanguageService } from './language.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private languageService: LanguageService) {
  }

  transform(value?: { [key in Language]: string }): string {
    if (!value) {
      return '';
    }
    return value[this.languageService.currentLanguage];
  }

}
