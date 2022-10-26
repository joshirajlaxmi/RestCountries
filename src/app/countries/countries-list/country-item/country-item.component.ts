import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country.model';

@Component({
  selector: 'app-county-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss'],
})
export class CountryItemComponent implements OnInit {
  @Input() country: Country;
  @Input() index: number;
  constructor() {}

  ngOnInit(): void {}
}
