import { Component, computed, inject, resource, signal } from '@angular/core';
import { Search } from '../../components/search/search';
import { CountryTableList } from '../../components/country-table-list/country-table-list';
import { Country } from '../../services/country';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { DebounceTimeService } from '../../../settings/services/debounce-time-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'country-by-country-page',
  imports: [Search, CountryTableList],
  templateUrl: './by-country-page.html',
})
export default class ByCountryPage {

  private router = inject(Router);
  private countryService = inject(Country);
  private debounceTimeService = inject(DebounceTimeService);
  private activatedRoute = inject(ActivatedRoute);

  private queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') || '';
  public query = signal<string>(this.queryParam);
  public debounceTime = computed(() => this.debounceTimeService.getDebounceTime());

  public countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      this.router.navigate(['/country/by-country'], {
        queryParams: { query: params.query },
      });

      return this.countryService.searchByCountry(params.query);
    }

  });


}
