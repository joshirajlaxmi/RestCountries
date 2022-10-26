import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CountryFilter } from './country-filter.model';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss'],
})
export class CountryFilterComponent implements OnInit {
  faSearch = faSearch;
  @ViewChild('searchForm', { static: false }) filterForm: NgForm;
  filterCriteria: CountryFilter;
  regionList = [
    { id: 'AF', name: 'africa' },
    { id: 'AM', name: 'america' },
    { id: 'AS', name: 'asia' },
    {
      id: 'EU',
      name: 'europe',
    },
    { id: 'OC', name: 'oceania' },
  ];
  constructor() {}

  ngOnInit(): void {}

  selectRegion(e: any) {
    console.log(e.target.value);
    //send a web service call
    // this.filterCriteria.region = e.target.value;
    // if (e) this.filterCriteria.region = e.target.value;
  }

  onSubmit() {
    console.log(this.filterForm.value.countryName);
    console.log(this.filterForm.value.region);
    let regionName = this.regionList.find(
      (x) => x.id === this.filterForm.value.region
    );
    this.filterCriteria = {
      countryName: this.filterForm.value.countryName,
      region: regionName?.name,
    };
    console.log(
      `country name and region are ${this.filterCriteria.countryName} and ${this.filterCriteria.region}`
    );
  }
}
