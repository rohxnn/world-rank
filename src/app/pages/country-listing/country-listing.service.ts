import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//model
import { CountryListing } from './country-listing.model';
//third-party
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryListingService {
  private baseUrl: string = 'https://restcountries.com/v3.1/';
  private fields: string = '?fields=name,capital,population,area,flags,borders,region,independent,unMember,subregion,languages,currencies,continents,capital'
  constructor(private http: HttpClient) { }

  getCountries(){
    const urlWithParam = `${this.baseUrl}all/${this.fields}`
    return this.http.get<CountryListing[]>(urlWithParam);
  }

  getCountriesByName(country: string): Observable<CountryListing>{
    const queryParam = '?fullText=true'
    const urlWithParam = `${this.baseUrl}name/${country}${queryParam}`;
    return this.http.get<CountryListing>(urlWithParam);
  }

  getCountriesbyCode(code: string[]): Observable<any[]> {
    const urlWithParam = `${this.baseUrl}alpha?codes=${code}&fields=flags,name`;
    return this.http.get<any[]>(urlWithParam).pipe(
      map(data => data.map(item => ({ flags: item.flags, name: item.name })))
    );
  }
}
