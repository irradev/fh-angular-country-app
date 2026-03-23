import { Component } from '@angular/core';
import { Search } from '../../components/search/search';
import { CountryTableList } from '../../components/country-table-list/country-table-list';

@Component({
  selector: 'country-by-country-page',
  imports: [Search, CountryTableList],
  templateUrl: './by-country-page.html',
})
export default class ByCountryPage { }
