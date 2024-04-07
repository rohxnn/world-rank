import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(countryDetail: any, option: string) {
    if(option === 'population') {
      return  countryDetail.slice().sort((a, b) => b.population - a.population);
    } else {
      if(option === 'area') {
        return  countryDetail.slice().sort((a, b) => b.area - a.area);
      }
    }
    return null;
  }

}
