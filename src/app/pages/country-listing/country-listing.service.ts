import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//model
import { CountryListing } from './country-listing.model';

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

  getCountriesByName(country: string){
    const urlWithParam = `${this.baseUrl}name/${country}`;
    return this.http.get<CountryListing>(urlWithParam);
  }
}
