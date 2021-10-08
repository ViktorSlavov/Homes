import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resources'
})
export class ResourcesPipe implements PipeTransform {

  transform(value: string, key: string, replacement: string): string {
    if (!value) {
      return '';
    }
    const regExp = new RegExp(`{{${key}}}`, 'g');
    return value.replace(regExp, replacement);
  }

}
