import { Component, OnInit } from '@angular/core';
import { Country } from './country.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  countries: Country[] = [
    {
      countryName: 'Germany',
      region: 'europe',
      population: '87,78,000,000',
      capital: 'Berlin',
      flagImgUrl: '../../../../assets/images/germanyFlag.JPG',
    },
    {
      countryName: 'Germany',
      region: 'europe',
      population: '87,78,000,000',
      capital: 'Berlin',
      flagImgUrl: '../../../../assets/images/germanyFlag.JPG',
    },
    {
      countryName: 'Germany',
      region: 'europe',
      population: '87,78,000,000',
      capital: 'Berlin',
      flagImgUrl: '../../../../assets/images/germanyFlag.JPG',
    },
    {
      countryName: 'Germany',
      region: 'europe',
      population: '87,78,000,000',
      capital: 'Berlin',
      flagImgUrl: '../../../../assets/images/germanyFlag.JPG',
    },
    {
      countryName: 'Germany',
      region: 'europe',
      population: '87,78,000,000',
      capital: 'Berlin',
      flagImgUrl: '../../../../assets/images/germanyFlag.JPG',
    },
    {
      countryName: 'Germany',
      region: 'europe',
      population: '87,78,000,000',
      capital: 'Berlin',
      flagImgUrl: '../../../../assets/images/germanyFlag.JPG',
    },
    {
      countryName: 'Germany',
      region: 'europe',
      population: '87,78,000,000',
      capital: 'Berlin',
      flagImgUrl: '../../../../assets/images/germanyFlag.JPG',
    },
    {
      countryName: 'Germany',
      region: 'europe',
      population: '87,78,000,000',
      capital: 'Berlin',
      flagImgUrl: '../../../../assets/images/germanyFlag.JPG',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
