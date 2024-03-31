import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryListingComponent } from './pages/country-listing/country-listing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/world-rank', pathMatch: 'full' },
  { path: 'world-rank', component: HomeComponent ,children: [
    { path: '', component: CountryListingComponent }
  ]},
];
