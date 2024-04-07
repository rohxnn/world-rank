import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//component
import { CountryListingComponent } from '../country-listing/country-listing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryListingComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
