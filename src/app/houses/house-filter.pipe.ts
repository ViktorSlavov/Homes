import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'houseFilter'
})
export class HouseFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
