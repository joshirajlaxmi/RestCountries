import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CountryFilterComponent } from './countries/country-filter/country-filter.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { CountryItemComponent } from './countries/countries-list/country-item/country-item.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CountryFilterComponent,
    CountriesListComponent,
    CountryItemComponent,
    CountryDetailComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
