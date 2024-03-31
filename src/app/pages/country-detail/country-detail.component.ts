import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//service
import { CountryListingService } from '../country-listing/country-listing.service';
//model
import { CountryListing } from '../country-listing/country-listing.model';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit {
  countryName: string;
  countryDetail: CountryListing;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryListingService: CountryListingService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.countryName = param['name']
    });
    this.getCountryDetail();
  }

  getCountryDetail() {
    this.countryListingService.getCountriesByName(this.countryName).subscribe({
      next: (response: CountryListing) => {
        this.countryDetail = response;
      },
      error: (error) => {
        console.log(error.message);
      }
    });
  }
}
