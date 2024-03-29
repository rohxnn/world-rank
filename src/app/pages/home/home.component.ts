import { Component } from '@angular/core';
//component
import { CountryListingComponent } from '../country-listing/country-listing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryListingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
