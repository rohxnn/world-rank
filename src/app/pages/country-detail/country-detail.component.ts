import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//service
import { CountryListingService } from '../country-listing/country-listing.service';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit {
  countryName: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryListingService: CountryListingService
    ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.countryName = param['name']
    });  
  }

}
