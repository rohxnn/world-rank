import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryListingComponent } from './pages/country-listing/country-listing.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/world-rank', pathMatch: 'full' },
  { path: 'world-rank', component: HomeComponent ,children: [
    { path: '', component: CountryListingComponent },
    { path: ':name', component: CountryDetailComponent }
  ]},
];
