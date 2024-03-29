import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//service
import { CountryListingService } from './country-listing.service';
//model
import { CountryListing } from './country-listing.model';
//pipe
import { SortPipe } from '../../shared/sort.pipe';
//third-party
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-country-listing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    SortPipe
  ],
  templateUrl: './country-listing.component.html',
  styleUrl: './country-listing.component.scss'
})
export class CountryListingComponent implements OnInit {
  countryList: CountryListing[] = [];
  selectedValue: string = 'population'
  region: any = [];
  selectedRegion: string;

  constructor(private countryListingService: CountryListingService) {

  }

  ngOnInit() {
    this.getCountryList();
  }

  async getCountryList(): Promise<void> {
    try {
      const response = await this.countryListingService.getCountries().toPromise();
      this.countryList = response;
      this.region = [...new Set(this.countryList.map(data => data.region))];
      this.region.sort();
    } catch (error) {
      console.error(error.message);
    }
  }
}
