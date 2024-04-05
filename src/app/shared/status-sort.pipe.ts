import { Pipe, PipeTransform } from '@angular/core';
//model
import { CountryListing } from '../pages/country-listing/country-listing.model';

@Pipe({
  name: 'statusfilter',
  standalone: true
})
export class StatusSortPipe implements PipeTransform {

  transform(countryList: CountryListing[], status: string): CountryListing[] {
    console.log(status);
    
    if (status === 'unMember') {
      return countryList.filter(country => country.unMember === true);
    } else if (status === 'independent') {
      return countryList.filter(country => country.independent === true);
    } else {
      return countryList;
    }
  }

}
