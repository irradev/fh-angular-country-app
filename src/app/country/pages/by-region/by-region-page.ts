import { Component } from '@angular/core';
import { Search } from '../../components/search/search';
import { CountryTableList } from '../../components/country-table-list/country-table-list';

@Component({
  selector: 'country-by-region-page',
  imports: [Search, CountryTableList],
  templateUrl: './by-region-page.html',
})
export default class ByRegionPage { }
