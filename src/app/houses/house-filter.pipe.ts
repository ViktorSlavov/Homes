import { Pipe, PipeTransform } from '@angular/core';
import { House } from '../common';

@Pipe({
  name: 'houseFilter'
})
export class HouseFilterPipe implements PipeTransform {

  transform(houses: House[] | null, minSQM: number, maxSQM: number, minPrice: number, maxPrice: number, totalPrice?: boolean): House[] {
    if (!houses) {
      return [];
    }
    const res = houses.filter(h => {
      const cost = !totalPrice ? h.costPerSQM : h.costPerSQM * h.SQM;
      return h.available && inRange(cost, minPrice, maxPrice) && inRange(h.SQM, minSQM, maxSQM);
    });
    return res;
  }

}

const inRange = (val: number, min: number, max: number): boolean => {
  min = min === undefined || min === null ? 0 : min;
  max = max === undefined || max === null ? Infinity : max;
  return min <= val && val <= max;
}
