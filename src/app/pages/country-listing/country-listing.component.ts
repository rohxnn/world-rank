import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
//service
import { CountryListingService } from './country-listing.service';
//model
import { CountryListing } from './country-listing.model';
//pipe
import { SortPipe } from '../../shared/sort.pipe';
import { SearchPipe } from '../../shared/search.pipe';
import { StatusSortPipe } from '../../shared/status-sort.pipe';

@Component({
  selector: 'app-country-listing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgClass,
    RouterLink,
    SortPipe,
    SearchPipe,
    StatusSortPipe
  ],
  templateUrl: './country-listing.component.html',
  styleUrls: ['./country-listing.component.scss']
})
export class CountryListingComponent implements OnInit {
  countryList: CountryListing[] = [];
  selectedValue: string = 'population';
  region: any = [];
  searchValue: string;
  status: string;
  filteredCountryList: any;
  selectedRegion: string[] = [];

  constructor(private countryListingService: CountryListingService) { }

  ngOnInit() {
    this.getCountryList();
  }

  async getCountryList(): Promise<void> {
    try {
      const response = await this.countryListingService.getCountries().toPromise();
      this.countryList = response;
      this.filteredCountryList = this.countryList;
      this.region = [...new Set(this.countryList.map(data => data.region))];
      this.region.sort();
    } catch (error) {
      console.error(error.message);
    }
  }

  onClickRegion(region: string) {
    if (!this.selectedRegion.includes(region)) {
      this.selectedRegion.push(region);
      if (this.filteredCountryList.some(data => data.region.includes(region))) {
        this.filteredCountryList = this.filteredCountryList.filter((country => country.region === region));
      } else {
        this.filteredCountryList = this.filteredCountryList.concat(this.countryList.filter(country => country.region === region));
      }
    } else {
      this.filteredCountryList = this.filteredCountryList.filter(country => country.region != region);
      this.selectedRegion = this.selectedRegion.filter((r) => r !== region);
      if (this.selectedRegion.length === 0) {
        this.filteredCountryList = this.countryList
      }
    }
  }

  onStatusChange(status: string) {
    this.status = status;
  }
}
