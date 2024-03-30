import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(countries: any[], searchTerm: string, searchFields: string[] = ['name', 'region', 'subregion']): any[] {
    if (!searchTerm || !countries) {
      return countries;
    }

    searchTerm = searchTerm.toLowerCase();
    return countries.filter(country => {
      for (const field of searchFields) {
        if (field === 'name') {
          if (country[field].common?.toLowerCase().includes(searchTerm)) {
            return true;
          }
        } else if (country[field]?.toLowerCase().includes(searchTerm)) {
          return true;
        }
      }
      return false;
    });
  }

}
