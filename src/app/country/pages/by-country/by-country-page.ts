import { Component, inject, resource, signal } from '@angular/core';
import { Search } from '../../components/search/search';
import { CountryTableList } from '../../components/country-table-list/country-table-list';
import { Country } from '../../services/country';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'country-by-country-page',
  imports: [Search, CountryTableList],
  templateUrl: './by-country-page.html',
})
export default class ByCountryPage {

  private countryService = inject(Country);
  public query = signal<string>('');

  public countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
      return this.countryService.searchByCountry(params.query);
    }

  });


}
